     var btnClick = function(i){
    
        $('#btn' + i).click(function(){
        console.log(i)
        })
    }
    
    
for (let i=0; i <= 2 ; i++){
    btnClick(i)
}