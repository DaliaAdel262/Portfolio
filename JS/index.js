function openLinkedIn(){
    const a = document.createElement('a');
    a.setAttribute('href','https://www.linkedin.com/in/dalia-adel-877a43220/');
    a.setAttribute('target','auto_blank');
    a.click();
}

function downloadProject(){
    const a = document.createElement('a');
    const url='./projects/sushi_website.rar';
    a.setAttribute('href',url);
    a.setAttribute('download','sushi_website.rar');
    a.click();
}

function downloadCV(){
    const cvUrl = './CV/DaliaAdelMohamedCV.pdf';
    
    const a = document.createElement('a');
    
    a.setAttribute('href', cvUrl);
    a.setAttribute('download', 'DaliaAdelMohamedCV.pdf');

    console.log(a)
    a.click();
}