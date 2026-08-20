fetch('/api/auth/me').then(r=>{if(!r.ok)location='/login.html'});out.onclick=async()=>{await fetch('/api/auth/logout',{method:'POST'});location='/login.html'};
