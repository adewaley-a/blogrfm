import React from "react";
import { useEffect } from "react";
import './blog.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bgdesk from './blogr-landing-page-main/blogr-landing-page-main/images/bg-pattern-intro-desktop.svg'
import bgmob from './blogr-landing-page-main/blogr-landing-page-main/images/bg-pattern-intro-mobile.svg'
import circle from './blogr-landing-page-main/blogr-landing-page-main/images/bg-pattern-circles.svg'
import sign from './blogr-landing-page-main/blogr-landing-page-main/images/logo.svg'
import editor from './blogr-landing-page-main/blogr-landing-page-main/images/illustration-editor-desktop.svg'
import editorm from './blogr-landing-page-main/blogr-landing-page-main/images/illustration-editor-mobile.svg'
import phone from './blogr-landing-page-main/blogr-landing-page-main/images/illustration-phones.svg'
import pc from './blogr-landing-page-main/blogr-landing-page-main/images/illustration-laptop-desktop.svg'
import pcm from './blogr-landing-page-main/blogr-landing-page-main/images/illustration-laptop-mobile.svg'
import arrow from './blogr-landing-page-main/blogr-landing-page-main/images/icon-arrow-light.svg'
import ham from './blogr-landing-page-main/blogr-landing-page-main/images/icon-hamburger.svg'
import close from './blogr-landing-page-main/blogr-landing-page-main/images/icon-close.svg'

function Blog(){

    useEffect(
        ()=>{
            AOS.init()
        },[]
    )

    return(
        <>
        <div className="bg">
        <img src = {bgdesk} className = "bgpat"/>
        <img src = {bgmob} className = "bgmob"/>
        <div className="modal" >
           <div>
                <div></div>
                <div></div>
                <div></div>
            </div> 
           <div className="menubottom" >
                <div className="log1" >Login</div>
                <div className="sin1" >Sign Up</div>
            </div>      
        </div>

        <nav className="navbar">
            <div className="fest"><img src = {sign} className="blo" /></div>
            <div className="secund">
                <div className="product" ><div  className="pr" >Product</div> <div><img src ={arrow}/></div></div>
                <div className="pt2" >
                        <div className="pt3" id = "pt31" >Overview</div>
                        <div className="c3" >Pricing</div>
                        <div className="c3" >Marketplace</div>
                        <div className="c3" >Features</div>
                        <div className="c3" >Integrations</div>
                    </div> 
                <div className="company" ><div className="pr" >Company</div> <div><img src ={arrow}/></div></div>
                    <div className="cp2" >
                        <div className="c3" id = "cp31" >About</div>
                        <div className="c3" >Team</div>
                        <div className="c3" >Blog</div>
                        <div className="c3" >Careers</div>
                    </div>                
                    <div className="connect" ><div className="pr" >Connect</div> <div><img src ={arrow}/></div></div>
                    <div className="c2" >
                        <div className="c3" id = "c31" >Contact</div>
                        <div className="c3" >Newsletter</div>
                        <div className="c3" >LinkedIn</div>
                    </div>
            </div>
            <div className="feth" ></div>
            <div className="thed">
                <div className="log" >Login</div> <div className="sin" >Sign Up</div>
                <img className="ham" src={ham}/><img className="close" src={close}/>
            </div>
        </nav>

        <div className="text1">
            <div className="un">A modern publishing platform</div>
            <div className="deux">Grow your audience and build your online brand</div>
            <div className="trois">
                <div className="btn1st">Start For Free</div>
                <div className="btn2nd">Learn More</div>
            </div>
        </div>

        </div>

        <div className="secondpage">
            <h2 className="design" data-aos="fade-down">Designed for the future</h2>
           <div className="wrapper2nd"> <div className="leff" data-aos="fade-right" >
                <div className="exten">
                    <h3>Introducing an extensible editor</h3>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.
                </div>
                <div className="content">
                    <h3>Robust content management</h3>
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </div>
            </div>

            <div className="rait">
                <img src ={editor} className ="e1" data-aos="fade-left" />
                <img src ={editorm} className ="e1m" data-aos="fade-left" />
            </div></div>
        </div>

        <div className="thirdpage">
            <img src={circle} className = "c1"/><img src={phone} data-aos="fade-up" className = "p1"/>
            <div className="thirdstext" data-aos="fade-up" >
                <span>State of the Art Infrastructure</span><br/><br/>
                <div className="with" > With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
</div>
            </div>
        </div>

        <div className="fourthpage" >
            <img src={pc} className="pc" data-aos="fade-right" /><img src={pcm} className="pcm" data-aos="fade-right" />
            <div className="fourthtext" data-aos="zoom-out" >
                
                    <div className="free" >Free, open, simple</div>
                    <div> Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

                   </div>
                
                    <div className="power">Powerful tooling</div>
                    <div>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.

                </div>
            </div>
        </div>

        <div className="lastpage" >
            <div className="lastcov" >
            <div className="last" id="blo2" ><img src = {sign} className="blo"  /></div>

            <div className="last" >
                <div className="topmost">Product</div>
                <div className="ones">Overview</div>
                <div className="ones">Pricing</div>
                <div className="ones">Marketplace</div>
                <div className="ones">Features</div>
                <div className="ones">Integrations</div>
            </div>

            <div className="last" >
            <div  className="topmost">Company</div>
                <div className="ones">About</div>
                <div className="ones">Team</div>
                <div className="ones">Blog</div>
                <div className="ones">Careers</div>
            </div>

            <div className="last" >
            <div  className="topmost">Connect</div>
                <div className="ones">Contact</div>
                <div className="ones">Newsletter</div>
                <div className="ones">LinkedIn</div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Blog