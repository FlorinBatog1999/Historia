function afisare(){
    alert("Imaginea din stanga butonului apasat reprezinta arena in care s-au desfasurat primele jocuri olimpice");
}

var carte1={
    an:1600,
    nume:'Liderul nostru',
    autor:'Necunoscut',
    
};
var carte2={
    an:1900,
    nume:'Legea noastra',
    autor:'Anonim'
};
var carte3={
    an:1800,
    nume:'Labirintul',
    autor:'Aujunu Bidmimdi'
};

function recomandare(){
    if(carte1.an <= carte2.an && carte1.an<=carte3.an)
    {
        alert("Cartea recomandata este: "+carte1.nume+", autor "+carte1.autor+" publicata in anul "+carte1.an);
    }
    else if(carte2.an <= carte3.an )
    {
        alert("Cartea recomandata este: "+carte2.nume+", autor "+carte2.autor+" publicata in anul "+carte2.an);
    } 
    else {
        alert("Cartea recomandata este: "+carte3.nume+", autor "+carte3.autor+" publicata in anul "+carte3.an);
    }
}
function informatii1(){
   
    alert("Cel mai medaliat sportiv este Michael Phelphs.")
}    
    
function informatii2()
{
    alert("Orasul cu cele mai multe Jocuri Olimpice organizate este Londra.");
}
    
