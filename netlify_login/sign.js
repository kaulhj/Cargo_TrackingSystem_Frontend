let index= {

    init: function () {
        $("#btn-sign-save").on("click", () => {
            this.save();
        });

    
 




    },









    save: function () {

        let user = {
            email: $("#uemail").val(),
            password: $("#password").val()
        }

        //console.log(data);
        //ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해줌
        $.ajax({
            type: "POST",
            url: "https://perfum.site/user/login/",
            data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8", //바디데이터가 어떤 타입인지
            success:function(data) {

                     alert("로그인성공");
    
                     window.location.href = "https://cozy-crumble-750101.netlify.app";
    
    
            },
            error:function(data,status,er) {
    
                alert("error: "+data+" status: "+status+" er:"+er);
    
            }
    
        });  
        
        //통신을 이용해서 3개의 데이터를 json으로 변경하여 insert요청
    },


  

}

index.init();