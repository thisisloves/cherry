		var txt=document.getElementById("user");
		var passwd=document.getElementById("pass1");
		var email=document.getElementById("email");
		var passwd2=document.getElementById("pass2");
		var sub=document.getElementById("btn");
		var s=document.querySelector("#registered>.registered>.registered-l>form>s:nth-of-type(1)")
		var s1=document.querySelector("#registered>.registered>.registered-l>form>s:nth-of-type(2)")
		var s2=document.querySelector("#registered>.registered>.registered-l>form>s:nth-of-type(3)")
	    var s3=document.querySelector("#registered>.registered>.registered-l>form>s:nth-of-type(4)")
		var txtoff=passwdoff=passwd2off=false;  //每个部分独立验证的状态开关
		
		txt.onblur=function(){
		var reg = /^[1-9]\d{6,11}$/;  //第一位为1第二位为3-9+随机9个数子
		if(reg.test(txt.value)){
			txt.style.border="1px skyblue solid";
			s.style.display="none";
			txtoff=true;
		}else{
			txt.style.border="1px red solid";
			s.style.display="block";
			txtoff=false;
		}
		}

		passwd.onblur=function(){
		var lengthReg = /^.{6,18}$/;   //密码6到16位 所有
		if(!lengthReg.test(passwd.value)){
			passwd.style.border="1px red solid";
			s1.style.display="block";
			passwdoff=false;
			return;
		}
	    email.onblur=function(){
	    var emReg= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	    if(!emReg.test(this.value)){
	    	email.style.border="1px solid red";
	    	s3.style.display="block";
	    }else{
	    	email.style.border="1px solid skyblue";
	    	s3.style.display="none";
	    }
	    }
	    
	    
		// 每种类型独立判断的状态开关
		var a=b=c=0;
        var numReg = /\d/;
        if(numReg.test(this.value)){
            a = 1
        }
        var azReg = /[a-zA-Z]/;
        if(azReg.test(this.value)){
            b = 1
        }
        var tsReg = /[^\da-zA-Z]/;
        if(tsReg.test(this.value)){
            c = 1
        }
	    switch(a+b+c){
	    	case 1: passwd.style.border="1px yellow solid";s1.style.display="none";;break;  //第一级
	    	case 2: passwd.style.border="1px green solid";s1.style.display="none";break;   //第二级
	    	case 3: passwd.style.border="1px skyblue solid";s1.style.display="none";break;    //第三级
	    }
	     passwdoff=true;
	     //在密码框中验证密码是否正确  
	       if(passwd2.value!=""){   //第二个密码框先填了密码的情况
	     	if(passwd2.value==passwd.value){
	     		passwd2.style.border="1px skyblue solid";
	     		s2.style.display="none";
	     		passwd2off=true;
	     	}else{
	     		passwd2.style.border="1px red solid";
	     		s2.style.display="block";
				passwd2=false;
	     	}
	     }
	   }
		passwd2.onblur=function(){
			if(passwd2.value==passwd.value){
				passwd2.style.border="1px skyblue solid";
				passwd2off=true;
				s2.style.display="none";
			}else{
				passwd2.style.border="1px red solid";
				s2.style.display="block";
				passwd2off=false;
			}
		}
		
		sub.onclick=function(){
			if(txtoff&&passwdoff&&passwd2off){
				
//注册
 class Register{
        constructor(){
            this.user = document.getElementById("user");
            this.pass = document.getElementById("pass1");
            this.btn = document.getElementById("btn");
            this.span = document.querySelector("span");

            this.init();
            this.getData();
        }
        init(){
            var that = this;
            this.btn.onclick = function(){
                that.setData()
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
        setData(){
            if(this.abc.length == 0){
                // 第一次注册
                this.abc.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                 alert( "注册成功");
                localStorage.setItem("abc",JSON.stringify(this.abc))
            }else{
                // 不是第一次注册，如果不是第一次注册，需要判断这次注册的和之前注册的是否重名，如果重名，不执行
                for(var i=0;i<this.abc.length;i++){
                    if(this.abc[i].user === this.user.value){
                        alert( "账号重名了");
                        return;
                    }
                }
                // 如果执行了，表示没重名，那就再增加一个
                this.abc.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                alert( "注册成功");
                localStorage.setItem("abc",JSON.stringify(this.abc))
            }
        }
    }

    new Register;
			}else{
				//失败时，判断是那个失败
				if(txtoff==false){
					alert("账号失败");
				}
				if(passwdoff==false){
					alert("密码失败");
				}
				if(passwd2off==false){
					alert("重复密码失败");
				}
			}
		}


