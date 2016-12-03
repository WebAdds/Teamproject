import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="tab-pane fade in active">
                <strong> &copy; Publications advertising web - All rights reserved</strong><br />
                <a href="http://www.reddit.com/submit"
                   onclick="window.location = 'http://www.reddit.com/submit?url=' + encodeURIComponent(window.location); return false">
                    <img src="http://www.reddit.com/static/spreddit7.gif" alt="submit to reddit" border="0"/> </a>

                <div id="share-buttons">


                    <a href="https://bufferapp.com/add?url=http://advertiseweb.site88.net/" target="_blank">
                        <img src="http://simplesharebuttons.com/images/somacro/buffer.png" alt="Buffer"/>
                    </a>


                    <a href="http://www.digg.com/submit?url=http://advertiseweb.site88.net/" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/diggit.png" alt="Digg"/>
                    </a>


                    <a href="mailto:ponko88@abv.bg?Subject=Advertising web&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 http://advertiseweb.site88.net/">
                        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email"/>
                    </a>


                    <a href="http://www.facebook.com/sharer.php?u=http://advertiseweb.site88.net/" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook"/>
                    </a>


                    <a href="https://plus.google.com/share?url=http://advertiseweb.site88.net/" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google"/>
                    </a>


                    <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://advertiseweb.site88.net/"
                       target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn"/>
                    </a>


                    <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());">
                        <img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest"/>
                    </a>


                    <a href="javascript:;" onclick="window.print()">
                        <img src="https://simplesharebuttons.com/images/somacro/print.png" alt="Print"/>
                    </a>


                    <a href="https://reddit.com/submit?url=http://advertiseweb.site88.net/;title=Advertising web"
                       target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit"/>
                    </a>


                    <a href="http://www.stumbleupon.com/submit?url=http://advertiseweb.site88.net/&amp;title=SAdvertising web"
                       target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/stumbleupon.png" alt="StumbleUpon"/>
                    </a>


                    <a href="http://www.tumblr.com/share/link?url=http://advertiseweb.site88.net/&amp;title=Advertising web"
                       target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr"/>
                    </a>


                    <a href="https://twitter.com/share?url=http://advertiseweb.site88.net/&amp;text=Advertise web&amp;hashtags=Advertise"
                       target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter"/>
                    </a>


                    <a href="http://vkontakte.ru/share.php?url=http://advertiseweb.site88.net/" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/vk.png" alt="VK"/>
                    </a>


                    <a href="http://www.yummly.com/urb/verify?url=http://advertiseweb.site88.net/&amp;title=Advertising web"
                       target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/yummly.png" alt="Yummly"/>
                    </a>

                </div>


                (c) 2016 - WebAds
            </footer>
        );
    }
}