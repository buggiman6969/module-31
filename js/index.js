document.getElementById('bg-cng').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends){
        friend.style.backgroundColor = 'peru';
        friend.style.color = 'white';
        friend.style.padding = '2%';
        friend.style.margin = '2%';
    }
})

document.getElementById('for-third-fd').addEventListener('click',function(){
    const friendNo3 = document.getElementById('friend-third');
    friendNo3.style.textAlign = 'center';
})