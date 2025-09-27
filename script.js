// --- 1. Page Content Definition ---
const pageContent = {
    // HOME PAGE CONTENT (from home.html)
    home: `
        <div class="row">
            <div class="col-md-6 d-flex align-items-center order-2 order-md-1">
                <div class="p-3">
                    <div class="button-container">
                        <button class="intro-btn animate-in">Hello I'm</button>
                    </div>
                    <h2 class="name animate-in" style="animation-delay: 0.2s;">Jenifa Mousumi</h2>
                    <h4 class="tittle animate-in" style="animation-delay: 0.4s;">Full-stack Web Developer</h4>
                    <div class="animate-in" style="animation-delay: 0.6s;">
                        <p class="about_contact"><i class="fa-solid fa-envelope"></i> jenifa.mousumi@gmail.com</p>
                    </div>
                    <div class="animate-in" style="animation-delay: 0.8s;">
                        <p class="about_contact"><i class="fa-solid fa-phone"></i> +880 1534 981465</p>
                    </div>
                    <div class="animate-in" style="animation-delay: 1.0s;">
                        <p class="about_contact"><i class="fa-solid fa-location-pin"></i> Uttara, Dhaka-1230, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                <img class="profile_img animate-in" style="animation-delay: 1.2s;" src="profile.jpg" alt="jenifa">
            </div>
        </div>
    `,

    // ABOUT ME CONTENT (from about_me.html)
    about_me: `
        <h1 class="page-title animate-in">About Me</h1>
        <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-start">
                <img class="about_page animate-in" src="cute-girl-hacker.jpg" alt="jenifa">
            </div>
            <div class="col-md-6">
                <div>
                    <h2 class="about_me_title animate-in" style="animation-delay: 0.2s;">Full-stack Developer</h2>
                    <p class="about_me_text animate-in" style="animation-delay: 0.4s;">I am a full-stack Web Developer (Laravel/PHP), having 2+ years of hands-on
                        experience in both front-end designing and back-end development. Familiar with all stages of the
                        development cycle for dynamic web projects. Currently looking for a place where I can learn more
                        and grow. </p>
                    <div class="skill-buttons-container animate-in" style="animation-delay: 0.6s;">
                        <button class="skill_button">Laravel</button>
                        <button class="skill_button">Core PHP</button><button class="skill_button">MySQL</button><button
                            class="skill_button">Shopify</button><button class="skill_button">Wordpress</button>
                        <button class="skill_button">Vue Js</button><button class="skill_button">Vannila
                            Js</button><button class="skill_button">Bootstrap</button><button
                            class="skill_button">Linux</button>
                        <button class="skill_button">WHM & cPanel</button><button
                            class="skill_button">CyberPanel</button><button class="skill_button">AWS</button>
                    </div>
                    <div class="download_cv animate-in" style="animation-delay: 0.8s;">
                        <a href="Jenifa Mousumi.docx" download="Jenifa_Mousumi_CV.docx"><button class="download-btn">Download
                                CV <i class="fa-solid fa-download"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="page-title animate-in" style="animation-delay: 1.0s;">What I Do</h1>
        <div class="row">
            <div class="col-md-4"><div class="service animate-in" style="animation-delay: 1.2s;">
                <h2 class="icon" style="color: #9774fa;"><i class="fa-solid fa-code"></i></h2>
                <h2 class="icon-title">Web Frontend Development</h2>
                <p class="description">Creating beautiful websites with responsive user interfaces and stunning designs using HTML, CSS,
                    Bootstrap, and Vue.js. Designing and developing front-end solutions that deliver a great user
                    experience.</p>
            </div></div>
            <div class="col-md-4 mb-4"><div class="service animate-in" style="animation-delay: 1.4s;">
                <h2 class="icon" style="color: #ed7256;"><i class="fa-brands fa-laravel"></i></h2>
                <h2 class="icon-title">Web Backend Development</h2>
                <p class="description">Building Smart and Stunning Websites from big to small with dynamic features and functionalities
                    using PHP and Laravel. Also ensuring the necessary optimizations for performance and reliability to
                    deliver seamless experience</p>
            </div></div>
            <div class="col-md-4 mb-4"><div class="service animate-in" style="animation-delay: 1.6s;">
                <h2 class="icon" style="color: #cfbc12;"><i class="fa-solid fa-computer-mouse"></i></h2>
                <h2 class="icon-title">Web Application Development</h2>
                <p class="description">Crafting impactful and functional web applications and software using PHP, Laravel, and MySQL.
                    Utilizing best practices for optimal performance and scalability to provide a seamless user
                    experience.</p></div>
            </div>
            <div class="col-md-4 mb-4"><div class="service animate-in" style="animation-delay: 1.8s;">
                <h2 class="icon" style="color: #2796e2;"><i class="fa-brands fa-wordpress"></i></h2>
                <h2 class="icon-title">Wordpress</h2>
                <p class="description">Crafting bespoke WordPress websites with custom themes and plugins to cater to your specific
                    requirements and needs. From design to deployment, ensuring seamless performance and user
                    experience.</p></div>
            </div>
            <div class="col-md-4 mb-4"><div class="service animate-in" style="animation-delay: 2.0s;">
                <h2 class="icon" style="color: #339b16;"><i class="fa-solid fa-database"></i></h2>
                <h2  class="icon-title">Server Management</h2>
                <p  class="description">Expert in managing Linux servers via SSH and also using CPanel & WHM. Proficient in deploying,
                    configuring, manageing database and maintaining servers to ensure optimal performance, security, and
                    reliability.</p></div>
            </div>
        </div>
    `,

    // SKILLS CONTENT (from skills.html)
    skills: `
        <h1 class="page-title animate-in">Technical skills</h1>
        <div class="row skills-section">
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Laravel</div>
                <progress class="skill-bar" value="0" data-target="77" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">PHP</div>
                <progress class="skill-bar" value="0" data-target="75" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">MySQL</div>
                <progress class="skill-bar" value="0" data-target="82" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Shopify Apps</div>
                <progress class="skill-bar" value="0" data-target="77" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">WordPress</div>
                <progress class="skill-bar" value="0" data-target="70" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Vue.Js</div>
                <progress class="skill-bar" value="0" data-target="55" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">HTML</div>
                <progress class="skill-bar" value="0" data-target="85" max="100"></progress></div>
           <div class="col-md-6 animate-in"><div class="skill-title-progress">Vanilla Javascript</div>
                <progress class="skill-bar" value="0" data-target="60" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">CSS/Bootstrap</div>
                <progress class="skill-bar" value="0" data-target="90" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">C/C++</div>
                <progress class="skill-bar" value="0" data-target="86" max="100"></progress></div>
        </div>

        <h1 class="page-title animate-in">Extra skills</h1>
        <div class="row skills-section">
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Adope Photoshop</div>
                <progress class="skill-bar" value="0" data-target="79" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Adope Illustrator</div>
                <progress class="skill-bar" value="0" data-target="50" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Canva</div>
                <progress class="skill-bar" value="0" data-target="71" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Arduino</div>
                <progress class="skill-bar" value="0" data-target="60" max="100"></progress></div>
        </div>

        <h1 class="page-title animate-in">Professional skills</h1>
        <div class="row skills-section">
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Communication</div>
                <progress class="skill-bar" value="0" data-target="95" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Team Work</div>
                <progress class="skill-bar" value="0" data-target="88" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Project Manegement</div>
                <progress class="skill-bar" value="0" data-target="78" max="100"></progress></div>
            <div class="col-md-6 animate-in"><div class="skill-title-progress">Creativity</div>
                <progress class="skill-bar" value="0" data-target="75" max="100"></progress></div>
        </div>
    `,

    // INTERESTS CONTENT (from interests.html)
    interests: `
        <h1 class="page-title animate-in">Personal Interests</h1>
        <div class="row">
            <div class="col-md-6 animate-in"><h5 class="interest">Competitive Programming</h5>
                <p class="interest-description">Ever since I can remember, I've always been fascinated by the power of logic. Whether it's solving
                    complex puzzles or tackling challenging questions, I find myself drawn to anything that requires a
                    logical approach. As I grew older, I discovered my love for competitive programming, and I began
                    exploring different online platforms such as UVa, LightOJ, CodeForces, URi, and more recently,
                    Leetcode. Each problem presents a unique challenge that tests my logical reasoning skills, and I'm
                    always eager to push myself further and learn more.</p>
            </div>
            <div class="col-md-6 animate-in"><h5 class="interest">Robotics</h5>
                <p class="interest-description">Exploring the exciting world of robotics using Arduino and other micro-controllers. I enjoy
                    programming these devices and integrating sensors to create unique and interactive robotic figures.
                    It's a challenging and fulfilling hobby that allows me to exercise my creativity and problem-solving
                    skills.</p>
            </div>
            <div class="col-md-6 animate-in"><h5 class="interest">Basic Electronics</h5>
                <p class="interest-description">From a young age, I've had a fascination with electronic components and the way they work. Over the
                    years, I've honed my skills in repairing and building electronic devices, and this hobby has evolved
                    into a passion for exploring the latest advancements in the field. Today, I actively seek out
                    opportunities to use my knowledge to benefit others. Whether it's helping a friend repair a faulty
                    device or sharing my expertise with a community of fellow hobbyists, I find great joy in using my
                    skills to make a positive impact.</p>
            </div>
            <div class="col-md-6 animate-in"><h5 class="interest">Indoor Sports and Games</h5>
                <p class="interest-description">While not a dedicated sportsman, I enjoy playing indoor games like Chess, Carrom, Pool and Card.
                    These games not only provide a fun and challenging experience, but also help to sharpen strategic
                    thinking, problem solving, and decision-making skills. Whether playing with friends or family, or
                    taking on new opponents, I always find these games to be a great way to unwind and have some fun.
                </p>
            </div>
            <div class="col-md-6 animate-in"><h5 class="interest">Outdoor Sports</h5>
                <p class="interest-description">Sports and outdoor games have always been an enjoyable activity for me. While I may not consider
                    myself a professional athlete, I have always had a great time playing games such as cricket,
                    football, and badminton. I also enjoy watching these games on television, and often find myself
                    cheering for my favorite teams and athletes. Even though it's just a casual hobby, playing and
                    watching sports has always been a great way for me to unwind and have fun.</p>
            </div>
            <div class="col-md-6 animate-in"><h5 class="interest">Other Interests</h5>
                <p class="interest-description">I enjoy watching movies and series as a way to unwind and escape from everyday life. Whether it's a
                    classic film or the latest binge-worthy show, I love getting lost in a good story no matter the
                    genre. I also enjoy listening to music, whether it's discovering new artists or revisiting old
                    favorites. Music has the power to uplift my mood and inspire creativity.</p>
            </div>
        </div>
    `,

    // EDUCATION CONTENT (from education.html)
    education: `
        <h1 class="page-title animate-in">Education</h1>
        <div class="row">
            <div class="col-md-6"><div class="service animate-in">
                <h4 class="icon-title">Bachelor of science from <br><a href="https://www.ewubd.edu/">East
                    West University</a></h4>
                <div>Department of Computer Science and Engineering</div>
                <div>2016-2020</div>
                <p><b>Campus:</b> <br><span>A/2, Jahurul Islam Avenue, Jahurul Islam City, Aftabnagar, Dhaka-1212,
                        Bangladesh </span></p>
            </div></div>
            <div class="col-md-6"><div class="service animate-in" style="animation-delay: 0.3s;">
                <h4 class="icon-title">Higher Secondary School Certificate (HSC) From<br><a href="https://www.rajukcollege.edu.bd/">Rajuk Uttara Model College</a></h4>
                <div>Group: Science</div>
                <div>2012-2024</div>
                <p><b>Campus:</b> <br><span>Sector#6, Uttara Model Town, Dhaka-1230,
                        Bangladesh </span></p>
            </div></div>
            <div class="col-md-6"><div class="service animate-in" style="animation-delay: 0.6s;">
                <h4 class="icon-title">Secondary School Certificate (SSC) From<br><a href="https://www.milestonecollege.edu.bd/">Milestone School and College</a></h4>
                <div>Group: Science</div>
                <div>2007-2012</div>
                <p><b>Campus:</b> <br><span>Milestone College is located in 30 & 44 Gareeb-E-Newaz Avenue, Sector-11, Uttara Model Town, Dhaka-1230, Bangladesh. </span></p>
            </div></div>
        </div>
    `,

    // EXPERIENCE CONTENT (from experience.html)
    experience: `
        <h1 class="page-title animate-in">Professional Experiences</h1>
        <div class="row">
            <div class="col-md-6"><div class="service animate-in">
                <h4 class="company-title">Project Maneger @ <span><a href="https://socialo.tech/">SOCIALO TECH</a></span></h4>
                <ul>
                    <li class="company-address">US Office Location: 1441 Broadway, Suite 3165 New York, NY, US 10018.</li>
                    <li class="company-address">Bangladesh Office Location: 238/1 Outer Circular Road, Dhaka-1217.</li>
                </ul>
                <div class="company-time">January 2021 - Present</div>
                <div>Responsibilities</div>
                <ul>
                    <li>Led multiple web development projects, ensuring timely delivery and client satisfaction.</li>
                    <li>Developed and maintained the company's web applications and websites.</li>
                    <li>Implemented Agile methodologies to enhance team productivity.</li>
                    <li>Collaborated with cross-functional teams to design and deploy high-quality web applications.</li>
                </ul>
            </div></div>
            <div class="col-md-6"><div class="service animate-in" style="animation-delay: 0.3s;">
                <h4 class="company-title">WordPress developer @ <span><a href="https://socialo.tech/">Pinavo tech TECH</a></span></h4>
                <div class="company-time">October 2020 - December 2020</div>
                <div>Responsibilities</div>
                <ul>
                    <li>Collaborating with design and content teams for seamless integration.</li>
                    <li>Conducting website performance tests and assisting with SEO optimization.</li>
                    <li>Developing custom themes and plugins using PHP and JavaScript.</li>
                    <li>Staying current with WordPress trends and security best practices.</li>
                </ul>
            </div></div>
        </div>
    `,

    // CONTACT CONTENT (REVISED for interactivity and clarity)
    contact: `
        <h1 class="page-title animate-in">Contact Me</h1>
        <div class="row">
            <div class="col-md-6 d-flex flex-column justify-content-center">
                <p class="animate-in">Feel free to reach out via email or phone for collaboration or job opportunities.</p>
                <p class="animate-in" style="animation-delay: 0.3s;">I look forward to hearing from you!</p>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-6">
                        <div class="service contact-card animate-in" style="animation-delay: 0.6s;">
                            <h2 class="icon-title"><i class="fa-solid fa-location-arrow round"></i></h2>
                            <h4>Address</h4>
                            <p class="description">Uttara, Dhaka-1230, Bangladesh</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service contact-card animate-in" style="animation-delay: 0.9s;">
                            <h2 class="icon-title"><i class="fa-solid fa-envelope round"></i></h2>
                            <h4>Email</h4>
                            <p class="description">jenifa.mousumi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// --- 2. Core SPA Logic & Interactivity Functions ---

const mainContentDiv = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * Animates the skill bars from 0 to their target value.
 * @param {HTMLElement} container - The element containing the skill bars (usually '#main-content').
 */
function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const targetValue = parseInt(bar.getAttribute('data-target'));
        bar.value = 0;

        setTimeout(() => {
            const duration = 1500;
            let start;

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                bar.value = Math.min(targetValue, (targetValue * progress / duration));

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }
            window.requestAnimationFrame(step);
        }, 300);
    });
}

/**
 * Initializes the observer to reveal content as it scrolls into view.
 */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px'
    });

    mainContentDiv.querySelectorAll('.animate-in').forEach(element => {
        observer.observe(element);
    });
}


/**
 * Renders the content for a specific page key and runs interactivity scripts.
 * @param {string} pageKey - The key corresponding to the content.
 */
function loadPage(pageKey) {
    if (pageContent[pageKey]) {
        mainContentDiv.innerHTML = pageContent[pageKey];
        window.scrollTo(0, 0);

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageKey) {
                link.classList.add('active');
            }
        });

        history.pushState(null, null, '#' + pageKey);

        initScrollReveal();

        if (pageKey === 'skills') {
            animateSkillBars(mainContentDiv);
        }

    } else {
        mainContentDiv.innerHTML = `<h1>Page Not Found</h1><p>The content for '${pageKey}' could not be loaded.</p>`;
    }
}


// --- 3. Event Listeners and Initial Load ---
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const pageKey = link.getAttribute('data-page');
        loadPage(pageKey);
    });
});

window.addEventListener('popstate', () => {
    const hash = window.location.hash.slice(1) || 'home';
    loadPage(hash);
});

document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash.slice(1) || 'home';
    loadPage(initialPage);
});