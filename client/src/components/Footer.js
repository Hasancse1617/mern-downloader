import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <p class="copyright">© 2021 - All Rights Reserved.</p>
                <ul>
                <li><a href="/faq.html">F.A.Q.</a></li>
                <span>•</span>
                <li><a href="/tos.html">Terms of Service</a></li>
                <span>•</span>
                <li><a href="/privacy.html">Privacy Policy</a></li>
                <span>•</span>
                <li><a href="/contact.html">Contact us</a></li>
                </ul>
                <p class="footer-link">YouTube Downloader, made with <span class="glyphicon glyphicon-heart"></span> by <a target="_blank" href="/en80/" itemprop="name">TubeMate</a></p>
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer