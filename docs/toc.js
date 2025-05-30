// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="hardware.html"><strong aria-hidden="true">2.</strong> Hardware</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rack.html"><strong aria-hidden="true">2.1.</strong> Rack</a></li><li class="chapter-item expanded "><a href="networking_hardware.html"><strong aria-hidden="true">2.2.</strong> Networking</a></li><li class="chapter-item expanded "><a href="bkk01.html"><strong aria-hidden="true">2.3.</strong> BKK01</a></li><li class="chapter-item expanded "><a href="bkk02.html"><strong aria-hidden="true">2.4.</strong> BKK02</a></li><li class="chapter-item expanded "><a href="bkk03.html"><strong aria-hidden="true">2.5.</strong> BKK03</a></li><li class="chapter-item expanded "><a href="bkk04.html"><strong aria-hidden="true">2.6.</strong> BKK04</a></li><li class="chapter-item expanded "><a href="bkk05.html"><strong aria-hidden="true">2.7.</strong> BKK05</a></li><li class="chapter-item expanded "><a href="bkk06.html"><strong aria-hidden="true">2.8.</strong> BKK06</a></li><li class="chapter-item expanded "><a href="bkk07.html"><strong aria-hidden="true">2.9.</strong> BKK07</a></li><li class="chapter-item expanded "><a href="bkk08.html"><strong aria-hidden="true">2.10.</strong> BKK08</a></li></ol></li><li class="chapter-item expanded "><a href="software.html"><strong aria-hidden="true">3.</strong> Software</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="networking.html"><strong aria-hidden="true">3.1.</strong> Networking</a></li><li class="chapter-item expanded "><a href="firmware.html"><strong aria-hidden="true">3.2.</strong> Firmware</a></li><li class="chapter-item expanded "><a href="networking_proxmox.html"><strong aria-hidden="true">3.3.</strong> Proxmox</a></li><li class="chapter-item expanded "><a href="filesystem.html"><strong aria-hidden="true">3.4.</strong> Filesystem</a></li><li class="chapter-item expanded "><a href="unlabored.html"><strong aria-hidden="true">3.5.</strong> Unlabored</a></li></ol></li><li class="chapter-item expanded "><a href="carbon.html"><strong aria-hidden="true">4.</strong> Carbon offset</a></li><li class="chapter-item expanded "><a href="team.html"><strong aria-hidden="true">5.</strong> Team</a></li><li class="chapter-item expanded "><a href="resources.html"><strong aria-hidden="true">6.</strong> Resources</a></li><li class="chapter-item expanded "><a href="post_mortems.html"><strong aria-hidden="true">7.</strong> Post Mortems</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="network_outage_pm_241219.html"><strong aria-hidden="true">7.1.</strong> 241219 - Network Outage</a></li><li class="chapter-item expanded "><a href="network_outage_pm_250306.html"><strong aria-hidden="true">7.2.</strong> 250306 - Network Outage</a></li></ol></li><li class="chapter-item expanded "><a href="ipv6/ipv6.html"><strong aria-hidden="true">8.</strong> IPv6</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ipv6/notation.html"><strong aria-hidden="true">8.1.</strong> Notation</a></li><li class="chapter-item expanded "><a href="ipv6/icmpv6.html"><strong aria-hidden="true">8.2.</strong> ICMPv6</a></li><li class="chapter-item expanded "><a href="ipv6/addgen.html"><strong aria-hidden="true">8.3.</strong> Address Generation</a></li><li class="chapter-item expanded "><a href="ipv6/ndp.html"><strong aria-hidden="true">8.4.</strong> NDP</a></li><li class="chapter-item expanded "><a href="ipv6/subnetting.html"><strong aria-hidden="true">8.5.</strong> Subnetting</a></li><li class="chapter-item expanded "><a href="ipv6/routing.html"><strong aria-hidden="true">8.6.</strong> Routing</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
