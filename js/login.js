  class Login{
        constructor(){
            this.user = document.getElementById("user");
            this.pass = document.getElementById("pass");
            this.btn = document.getElementById("btn");

            this.init();
            this.getData();
        }
        init(){
            var that = this;
            this.btn.onclick = function(){
                that.yanzheng();
            }
        }
        getData(){
            this.abc = localStorage.getItem("abc");
            // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
            if(this.abc == null){
                this.abc = [];
            }else{
                this.abc = JSON.parse(this.abc)
            }
        }
        yanzheng(){
            for(var i=0;i<this.abc.length;i++){
                if(this.abc[i].user == this.user.value && this.abc[i].pass == this.pass.value){
                    alert("登录成功")

                    this.abc[i].onoff = 1;

                    localStorage.setItem("abc",JSON.stringify(this.abc))
                        location.href = "../index.html";
            
                    return;
                }
            }
            alert("登录失败")
        }
    }


    new Login();
