const styles = `
html, body {
    cursor: url(https://raw.githubusercontent.com/kimuraz/super-fiesta/main/jack.svg), auto;
}

.ghost {
  all: initial;
  position: absolute;
  z-index: 9999;
  transform-origin: center;
  width: 90px;
  margin: 20px 0 0 -45px;
}
.ghost__eyes, .ghost__mouth {
  all: initial;
  position: absolute;
  z-index: 1;
  width: 15px;
  height: 15px;
  top: 34px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 50px;
  background: #161616;
  margin-left: -20px;
  transform-origin: center;
}
.ghost__eyes {
  box-shadow: 40px 0 0 #161616;
}
.ghost__mouth {
  margin: 0;
  top: 60px;
  transform: scale(0);
  border-radius: 20px 20px 12px 12px;
  width: 20px;
  trasform-origin: center bottom;
  overflow: hidden;
}
.ghost__tail {
  position: absolute;
  z-index: -1;
  top: 82px;
  height: 55px;
  width: 100%;
}
.ghost__tail:before {
  content: "";
  background: #fff;
  position: absolute;
  bottom: 35px;
  left: 0;
  height: 100px;
  width: 100%;
  border-radius: 40px 40px 5px 5px;
}
.ghost__rip {
  width: 15px;
  height: 28px;
  background: #fff;
  position: absolute;
  top: 15px;
  left: 0;
  box-shadow: -62px 0 0 #fff, -31px 0 0 #fff, 31px 0 0 #fff, 62px 0 0 #fff, 93px 0 0 #fff;
  border-radius: 50%;
  -webkit-animation: ghost-rips 1.2s linear infinite;
          animation: ghost-rips 1.2s linear infinite;
}

@-webkit-keyframes ghost-rips {
  0% {
    left: 0;
    top: 12px;
  }
  50% {
    left: 31px;
    top: 20px;
  }
  100% {
    left: 62px;
    top: 12px;
  }
}

@keyframes ghost-rips {
  0% {
    left: 0;
    top: 12px;
  }
  50% {
    left: 31px;
    top: 20px;
  }
  100% {
    left: 62px;
    top: 12px;
  }
}

/* leaf animations */

#leaves {
    all: initial;
    position:fixed;
    top:-50px;
    width:100%;
    text-align: right;
    background: transparent;
}

#leaves i {
    all: initial;
    display: inline-block;
    width: 200px;
    height: 150px;
    background: linear-gradient(to bottom right, #309900, #005600);
    transform: skew(20deg);
    border-radius: 5% 40% 70%;
    box-shadow: inset 0px 0px 1px #222;
    border: 1px solid #333;
    z-index: 1;
    -webkit-animation: falling 5s 0s infinite;
}

#leaves i:nth-of-type(2n) { -webkit-animation: falling2 5s 0s infinite; }
#leaves i:nth-of-type(3n) { -webkit-animation: falling3 5s 0s infinite; }

#leaves i:before {
  all: initial;
  position: absolute;
  content: '';
  top: 117px;
  right: 9px;
  height: 27px;
  width: 32px;
  transform: rotate(49deg);
  border-radius: 0% 15% 15% 0%;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  border-left: 0px solid #222;
  border-right: 1px solid #222;
  background: linear-gradient(to right, rgba(0,100,0,1), #005600);
  z-index: 1;
}

#leaves i:after {
  all: initial;
  content: '';
  height: 125px;
  width: 10px;
  background: linear-gradient(to right, rgba(0,0,0,.15), rgba(0,0,0,0));
  display: block;
  transform: rotate(125deg);
  position: absolute;
  left: 85px;
  border-radius:50%;
}


#leaves i:nth-of-type(n)    { height:23px; width:30px; }
#leaves i:nth-of-type(n):before { width:7px; height:5px; top:17px; right:1px; }
#leaves i:nth-of-type(n):after { width:2px; height:17px; left: 12px; top:0px; }

#leaves i:nth-of-type(2n+1)    { height:11px; width:16px; }
#leaves i:nth-of-type(2n+1):before { width:4px; height:3px; top:7px; right:0px; }
#leaves i:nth-of-type(2n+1):after { width:2px; height:6px; left: 5px; top:1px; }

#leaves i:nth-of-type(3n+2)  { height:17px; width:23px; }
#leaves i:nth-of-type(3n+2):before  { height:4px; width:4px; top:12px; right:1px; }
#leaves i:nth-of-type(3n+2):after  { height:10px; width:2px; top:1px; left:8px; }

#leaves i:nth-of-type(n)   { -webkit-animation-delay: 1.9s;}
#leaves i:nth-of-type(2n)  { -webkit-animation-delay: 3.9s;}
#leaves i:nth-of-type(3n)  { -webkit-animation-delay: 2.3s;}
#leaves i:nth-of-type(4n)  { -webkit-animation-delay: 4.4s;}
#leaves i:nth-of-type(5n)  { -webkit-animation-delay: 5s;  }
#leaves i:nth-of-type(6n)  { -webkit-animation-delay: 3.5s;}
#leaves i:nth-of-type(7n)  { -webkit-animation-delay: 2.8s;}
#leaves i:nth-of-type(8n)  { -webkit-animation-delay: 1.5s;}
#leaves i:nth-of-type(9n)  { -webkit-animation-delay: 3.3s;}
#leaves i:nth-of-type(10n) { -webkit-animation-delay: 2.5s;}
#leaves i:nth-of-type(11n) { -webkit-animation-delay: 1.2s;}
#leaves i:nth-of-type(12n) { -webkit-animation-delay: 4.1s;}
#leaves i:nth-of-type(13n) { -webkit-animation-delay: 1s;  }
#leaves i:nth-of-type(14n) { -webkit-animation-delay: 4.7s;}
#leaves i:nth-of-type(15n) { -webkit-animation-delay: 3s;  }

#leaves i:nth-of-type(n)    { background: linear-gradient(to bottom right, #309900, #005600); }
#leaves i:nth-of-type(2n+2)  { background: linear-gradient(to bottom right, #5e9900, #2b5600); }
#leaves i:nth-of-type(4n+1)  { background: linear-gradient(to bottom right, #990, #564500); }

#leaves i:nth-of-type(n)    { opacity: .7;}
#leaves i:nth-of-type(3n+1)  { opacity: .5;}
#leaves i:nth-of-type(3n+2)  { opacity: .3;}

#leaves i:nth-of-type(n)    {transform: rotate(180deg);}


#leaves i:nth-of-type(n) { -webkit-animation-timing-function:ease-in-out;}

@-webkit-keyframes falling {
    
    0% {
        -webkit-transform:
            translate3d(300,0,0)
            rotate(0deg);
    }
    
    100% {
        -webkit-transform:
            translate3d(-350px,700px,0)
            rotate(90deg);
        opacity: 0;
    }
}

@-webkit-keyframes falling3 {
     0% {
        -webkit-transform:
            translate3d(0,0,0)
            rotate(-20deg);
    }
    
    100% {
        -webkit-transform:
            translate3d(-230px,640px,0)
            rotate(-70deg);
        opacity: 0;
    }
}

@-webkit-keyframes falling2 {
     0% {
        -webkit-transform:
            translate3d(0,0,0)
            rotate(90deg);
    }
    
    100% {
        -webkit-transform:
            translate3d(-400px,680px,0)
            rotate(0deg);
        opacity: 0;
    }
}
`;


const fragment = new DocumentFragment();

// Leaves HTML
const leavesDiv = document.createElement("div");
leavesDiv.id = "leaves";
leavesDiv.classList.add("leaves");
for (let i = 0; i < 15; i++) {
    leavesDiv.appendChild(document.createElement("i"));
}
fragment.appendChild(leavesDiv);

window.addEventListener("load", () => {
    window.document.body.appendChild(fragment);
    // Append styles
    const styleEl = document.createElement("style");
    styleEl.textContent = styles;
    window.document.head.appendChild(styleEl);
});
