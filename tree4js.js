// JavaScript Document
var text;
var bfsqueue=[];
var timer=null; 

function dfs(node){  //dfs深搜
	queue.push(node);
	var i;	
	for(i=0;i<node.children.length;i++)
	{
		
		dfs(node.children[i]);
	}
	
}
function resetColor(){  //把字体全部恢复黑色
	var alltree= document.getElementsByClassName('tree');
	for(i=1;i<alltree.length;i++){
		alltree[i].style.color = '#000';
	}
}
function show(){    //根据队列搜索改变颜色
	
	clearInterval(timer);
	var i;	
	i = 1;
	resetColor();
	queue[1].style.color = '#0000ff';
	timer = setInterval(function(){ 
		i++;
		if(i >= queue.length){
			if(text.value!=queue[queue.length-1].innerText.split('\n')[0])
			queue[queue.length-1].style.color = '#000';
			clearInterval(timer);
		}else{
			
		  if(text.value == queue[i].innerText.split('\n')[0])
				queue[i].style.color = '#ff0033';
		  else
			queue[i].style.color = '#0000ff';
			
		 if(text.value!=queue[i-1].innerText.split('\n')[0])
			queue[i-1].style.color = '#000';
		}
	}, 500);
}

window.onload=function(){	
    
	
	document.getElementById('wantnode').onclick=function(){ //查询节点
		$('.tree').show();
		queue=[];
		text=document.getElementsByName('find')[0];
		dfs(document.getElementsByClassName('ull')[0]);	
		show();
			
	}
	

    $("li").click(function(){        //展开隐藏的点击
	   $(this).next(".ulchild").slideToggle("normal");
	   resetColor();   //被点击的时候，颜色刷新一遍
	   this.style.color = '#0000ff';  //显示被点击的颜色
	   var id=this.id;     //保存一下被点击的id
	
	    document.getElementById('addnode').onclick=function(){	 //添加节点
		text=document.getElementsByName('find')[0];		
       	var node=document.createElement("ul"); 
        node.innerHTML="<li>"+text.value+"</li>"; 		
        document.getElementById(id).appendChild(node); 						
	  }
	   document.getElementById('delnode').onclick=function(){	 //删除节点	
       document.getElementById(id).remove(); 						
	 }
	 
	})
};