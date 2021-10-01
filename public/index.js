
const changeTheme = (theme) => {
    let o1;
    let o2;
    if(theme=="1"){
        o1="2" 
        o2="3"
    }else if(theme=="2"){
        o1="1"
        o2="3"
    }else if(theme=="3"){
        o1="1"
        o2="2"
    
    }
    $("#mainbg").removeClass("theme"+o1)
    $("#mainbg").removeClass("theme"+o2)
    $("#mainbg").addClass("theme"+theme)
    
    $("#screen").removeClass("theme"+o1+ "screen")
    $("#screen").removeClass("theme"+o2+ "screen")
    $("#screen").addClass("theme"+theme+ "screen")

    $("#keypad").removeClass("theme"+o1+ "keypad")
    $("#keypad").removeClass("theme"+o2+ "keypad")
    $("#keypad").addClass("theme"+theme+ "keypad")

    $(".key").removeClass("theme"+o1+ "keygrey")
    $(".key").removeClass("theme"+o2+ "keygrey")
    $(".key").addClass("theme"+theme+ "keygrey")

    $(".bluekey").removeClass("theme"+o1+ "keyblue")
    $(".bluekey").removeClass("theme"+o2+ "keyblue")
    $(".bluekey").addClass("theme"+theme+ "keyblue")

    $(".redkey").removeClass("theme"+o1+ "keyred")
    $(".redkey").removeClass("theme"+o2+ "keyred")
    $(".redkey").addClass("theme"+theme+ "keyred")

    $("#themeselector").removeClass("theme"+o1+ "toggle")
    $("#themeselector").removeClass("theme"+o2+ "toggle")
    $("#themeselector").addClass("theme"+theme+ "toggle")


    
}


$("#themeselector").on('input',() => {
    
    const theme = 1 + parseInt($("#themeselector").val())
    theme.toString();
    changeTheme(theme)
})


let currentOp = ""

let justEval = false;
const executeOp = () => {
    currentOp = eval(currentOp)
    justEval = true
}

const action = (key) => {
    if(key == "RESET"){
        currentOp = '0'
    }else if(key == "EQUAL"){
        executeOp()
    }else if(key == "DEL"){
        currentOp = currentOp.slice(0,-1)
        currentOp == ''? currentOp = '0' : null
        
    }else{
        justEval ? currentOp = '' : null
        $("#screen").html() == '0'? currentOp = '' : null
        currentOp = currentOp + key
        justEval = false
    }
    
    $("#screen").html(currentOp) 

}




$(".key").click(function(){
    const keyPressed = $(this).attr('id');
    action(keyPressed)
})
$("#RESET").click(function(){
    
    action("RESET")
})
$("#equal").click(function(){
    action("EQUAL")
})