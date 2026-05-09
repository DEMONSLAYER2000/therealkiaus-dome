body{
margin:0;
font-family:Arial;
background:#0b0f1a;
color:white;
}

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px;
background:#111a33;
}

.tabs button{
margin:5px;
padding:8px 12px;
border:none;
border-radius:8px;
background:#1c2a55;
color:white;
cursor:pointer;
}

.searchbar{
text-align:center;
padding:10px;
}

#search{
width:60%;
padding:10px;
border-radius:10px;
border:none;
}

/* GRID */
#grid,#featured{
display:grid;
grid-template-columns:repeat(auto-fill,minmax(120px,1fr));
gap:10px;
padding:10px;
}

.card{
background:#111a33;
padding:10px;
border-radius:10px;
text-align:center;
cursor:pointer;
}

iframe{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
border:none;
display:none;
z-index:999;
}

/* APPS */
.apps-grid{
display:grid;
grid-template-columns:repeat(auto-fill,minmax(140px,1fr));
gap:15px;
padding:20px;
}

.app{
background:#1c2a55;
padding:20px;
text-align:center;
border-radius:12px;
cursor:pointer;
}
