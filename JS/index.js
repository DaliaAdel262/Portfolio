const projectContainer = document.querySelector('.project-cont');
let projects = [
    {
        name:'Landing page for sushi restaurant website',
        description:'Landing page using HTML & CSS while applying flexbox concepts and hover effects.',
        tools:['HTML','CSS','FlexBox'],
        URL : '',
        video_source : 'videos/sushi_demo.mp4',
    },
    {
        name:'Personal Website Template',
        description:'This project is a practice exercise where I replicated the design of https://harnishdesign.net/demo/html/simone/index-classic-header.html. The goal was to enhance my web development skills and practice responsiveness and GRID system in bootstrap.',
        tools:['HTML','CSS','Bootstrap','GRID system'],
        URL : 'https://portfolio-template-olive-sigma.vercel.app/#Nav-bar',
        video_source : 'videos/personalweb_demo.mp4',
    },
    {
        name:'CRUDS',
        description:'Simple webpage implementing CRUDS, that allows user to create, retrieve, update, delete or search product',
        tools:['HTML','CSS','Bootstrap','CRUDS'],
        URL : 'https://cruds-chi-two.vercel.app/',
        video_source : 'videos/cruds_demo.mp4',
    },
]

function openLinkedIn(){
    const a = document.createElement('a');
    a.setAttribute('href','https://www.linkedin.com/in/dalia-adel-877a43220/');
    a.setAttribute('target','auto_blank');
    a.click();
}

function openSite(url) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', url); 
    anchor.setAttribute('target', '_blank');
    anchor.click();
}
function displayProjects(){
    projectContainer.innerHTML += projects.map((project)=>{
        return `
        <div class="row p-4 rounded-3 project-item mb-4" role="button" style="border:2px solid var(--secondColor)" 
        onclick="openSite('${project.URL}')">
            <div class="col-lg-4 p-0 ">
                  <div class="container project-item p-4 ">
                        <div class="project-video" >
                          <video id="video" autoplay loop class="w-100 h-100 rounded-2" >
                            <source src=${project.video_source} type="video/mp4">
                        </video>
                        </div>
                    </div>
                </div>
      
                <div class="col-lg-8 p-0 d-flex align-items-center">
                  <div class="container p-4">
                    <div class="project-content">
                      <h3>${project.name}</h3>
                      <p>${project.description}</p>
                      <ul class="d-flex flex-wrap flex-row p-0">
                        ${project.tools.map((tool)=>{
                            return`
                            <li class="language-used">
                              <span class="m-0">${tool}</span>
                            </li>
                            `
                        }).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
        </div>
        `
    }).join('')
}

function downloadCV(){
    const cvUrl = './CV/DaliaAdelMohamed.pdf';
    
    const a = document.createElement('a');
    
    a.setAttribute('href', cvUrl);
    a.setAttribute('download', 'DaliaAdelMohamed.pdf');

    console.log(a)
    a.click();
}

displayProjects()