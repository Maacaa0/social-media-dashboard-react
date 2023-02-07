import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SocialSites from './components/SocialSites'
import Overview from './components/Overview'

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const themeStyles = {
    mainBg: {backgroundColor: theme === "light" ? "#ffffff" : "#1e202a"},
    navbarBg: {background: theme === "light" ? "#f5f7ff" : "#1f212e"},
    cardBg: {background: theme === "light" ? "#f0f2fa" : "#252a41"},
    headingColor: {color: theme === "light" ? "#1e202a" : "#ffffff"},
    otherTextColor: {color: theme === "light" ? "#63687e" : "#8b97c6"}
  }

  return (
     
    <div style={themeStyles.mainBg} className="App">

      <Navbar theme={theme}
              styles={themeStyles}
              toggler={themeToggler} />

      <div className='social-sites-container'>
        <SocialSites 
          border="var(--Facebook) 4px solid"
          img="/images/icon-facebook.svg"
          name="@nathanf"
          followersCount="1987"
          type="FOLLOWERS"
          today="/images/icon-up.svg"
          todayCount="12"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />

        <SocialSites 
          border="var(--Twitter) 4px solid"
          img="/images/icon-twitter.svg"
          name="@nathanf"
          followersCount="1044"
          type="FOLLOWERS"
          today="/images/icon-up.svg"
          todayCount="99"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />

        <SocialSites 
          border="var(--Instagram) 4px solid"
          img="/images/icon-instagram.svg"
          name="@realnathanf"
          followersCount="11k"
          type="FOLLOWERS"
          today="/images/icon-up.svg"
          todayCount="1099"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />  

        <SocialSites 
          border="var(--YouTube) 4px solid"
          img="/images/icon-youtube.svg"
          name="Nathan F."
          followersCount="8239"
          type="SUBSCRIBERS"
          today="/images/icon-down.svg"
          todayCount="144"
          color="var(--BrightRed)"
          theme={theme}
          styles={themeStyles} /> 

      </div>
      <h2 style={themeStyles.headingColor}>Overview - Today</h2>
      <div className="overview-container">
        <Overview 
          text="Page Views"
          img="/images/icon-facebook.svg"
          count="87"
          arrow="/images/icon-up.svg"
          percentage="3"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />

        <Overview 
          text="Likes"
          img="/images/icon-facebook.svg"
          count="52"
          arrow="/images/icon-down.svg"
          percentage="2"
          color="var(--BrightRed)"
          theme={theme}
          styles={themeStyles} />

        <Overview 
          text="Likes"
          img="/images/icon-instagram.svg"
          count="5462"
          arrow="/images/icon-up.svg"
          percentage="2257"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />

        <Overview 
          text="Profile Views"
          img="/images/icon-instagram.svg"
          count="52k"
          arrow="/images/icon-up.svg"
          percentage="1375"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />

        <Overview 
          text="Retweets"
          img="/images/icon-twitter.svg"
          count="117"
          arrow="/images/icon-up.svg"
          percentage="303"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />

        <Overview 
          text="Likes"
          img="/images/icon-twitter.svg"
          count="507"
          arrow="/images/icon-up.svg"
          percentage="553"
          color="var(--LimeGreen)"
          theme={theme}
          styles={themeStyles} />

        <Overview 
          text="Likes"
          img="/images/icon-youtube.svg"
          count="107"
          arrow="/images/icon-down.svg"
          percentage="19"
          color="var(--BrightRed)"
          theme={theme}
          styles={themeStyles} />

        <Overview 
          text="Total Views"
          img="/images/icon-youtube.svg"
          count="1407"
          arrow="/images/icon-down.svg"
          percentage="12"
          color="var(--BrightRed)"
          theme={theme}
          styles={themeStyles} />  
      </div>
    </div>
  )
}

export default App
