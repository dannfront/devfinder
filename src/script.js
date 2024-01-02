'use strict'

const form = document.querySelector('.form')
const userInput = document.querySelector('.search-user')
const resultInfo = document.querySelector('.result--info--user')
const containerTheme=document.querySelector(".container--theme")
const htmlTag=document.querySelector("html")
const errorMessague=document.querySelector(".errorMessague")

const containerCompany=document.querySelector(".container--company")
const containerTwitter=document.querySelector(".container--twitter")
const containerBlog=document.querySelector(".container--blog")
const containerLocation=document.querySelector(".container--location")

const avatar=document.querySelector('#avatar')
const nameUser=document.querySelector('#name--user')
const login=document.querySelector('#login')
const dateGit=document.querySelector('#date')
const bio=document.querySelector('#bio')
const repos=document.querySelector('#Repos')
const followers=document.querySelector('#Followers')
const following=document.querySelector('#Following')
const blog=document.querySelector('#blog')
const company=document.querySelector('#company')
const twitter=document.querySelector('#twitter')
const locationUser=document.querySelector('#location')

const themeImg=document.querySelector('.mode-img')
const themeText=document.querySelector('.mode-text')

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

async function getJson(user) {
    try {
        const data = await fetch(`https://api.github.com/users/${user}`)
        const json = await data.json()
        if(!data.ok) return
        return json
    } catch (error) {
        errorMessague.classList.remove("hidden")
    }
}

function renderInfo(data) {
    resetStyles()
    const date=new Date(data.created_at);

    avatar.src=`${data.avatar_url}`
    nameUser.innerText=`${data.name}`
    login.innerText=`@${data.login}`
    dateGit.innerText=`joined ${date.getDate()} ${months.at(date.getMonth())} ${date.getFullYear()}`
    bio.innerText=`${data.bio?data.bio:'This profile has no bio'}`
    repos.innerText=`${data.public_repos}`
    followers.innerText=`${data.followers}`
    following.innerText=`${data.following}`

    data.blog?containerBlog.classList.add("brillo"):containerBlog.classList.add("opacity-50")
    blog.href=data.blog?data.blog:"#"
    blog.innerText=`${data.blog?data.blog:'Not Avalible'}`

    data.twitter_username?containerTwitter.classList.add("brillo"):containerTwitter.classList.add("opacity-50")
    twitter.innerText=`${data.twitter_username?data.twitter_username:'Not Avalible'}`

    data.company?containerCompany.classList.add("brillo"):containerCompany.classList.add("opacity-50")
    company.innerText=`${data.company?data.company:'Not Avalible'}`

    data.location?containerLocation.classList.add("brillo"):containerLocation.classList.add("opacity-50")
    locationUser.innerText=`${data.location?data.location:'No Avalible'}`

    containerTwitter.classList.contains("brillo")?containerTwitter.classList.toggle("brillo"):""
    containerBlog.classList.contains("brillo")?containerBlog.classList.toggle("brillo"):""
    containerLocation.classList.contains("brillo")?containerLocation.classList.toggle("brillo"):""
    containerCompany.classList.contains("brillo")?containerCompany.classList.toggle("brillo"):""
}

async function getUserInfo(user) {
    try {

        const userInfo=await getJson(user)
        renderInfo(userInfo)
    } catch (error) {
        errorMessague.classList.remove("hidden")
    }
}

function resetStyles() {
    containerTwitter.classList.remove("opacity-50");
    containerBlog.classList.remove("opacity-50");
    containerLocation.classList.remove("opacity-50");
    containerCompany.classList.remove("opacity-50");
}

window.addEventListener('load',getUserInfo('octocat'))

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getUserInfo(userInput.value)
})

containerTheme.addEventListener('click',()=>{
    htmlTag.classList.toggle("dark")

    htmlTag.classList.contains("dark")?themeText.textContent="Dark":themeText.textContent="LIGHT"
    htmlTag.classList.contains("dark")?themeImg.src="../starter-code/assets/icon-moon.svg":themeImg.src="../starter-code/assets/icon-sun.svg"
})

userInput.addEventListener('click',()=>errorMessague.classList.add("hidden"))