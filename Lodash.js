let _ = {
  clamp(a1,a2,a3){
    let a4=Math.max(a1,a2)
    a4=Math.min(a4,a3)
    return a4
  },
  inRange(b1,b2,b3){
    if(b3){
       b3=b3
    }else{
       b3=b2;b2=0;
    }
    if(b2>b3){
       b4=b3;b3=b2;b2=b4;
    }
    if(b2<=b1 && b1< b3){
      return true
    }else{
    return false}
  },
  words(c1){
    return c1.split(' ')
  },
  pad(d1,d2){
    if(d2<=d1){
      return d1
    }else{
      let d3=(d2-d1.length)/2
      let d4=Math.ceil(Math.floor(d3))
      let d5=Math.floor(Math.ceil(d3))
      let d7=' '
      let d41=d7.repeat(d4)
      let d51=d7.repeat(d5)
      let d6=d41+d1+d51
      return d6
    }
  },
  has(e1,e2){
    if(e1[e2]){
      return true
    }else{
      return false
    }
  },
  invert(f1){
    let f2={};
    for(let key in f1){
      f2[f1[key]]=key
    }
    return f2;
  },
  findKey(g1,g2){
    for(let g11 in g1){
      let g3=g2(g1[g11])
      if(g3){
        return g11
      }
    }
    return undefined
  },
  drop(h1,h2=1){
    return h1.slice(h2)
  },
  dropWhile(i1,i2){
    function cb(element,index){
      let array
      return !i2(element,index,array)
    }
    let i4=i1.findIndex(cb)
    return this.drop(i1,i4)
  },
  chunk(j1,j2=1){
    let j3=[]
    for(let i=0;i<j1.length;i+=j2){
      let j33=j1.slice(i,i+j2)
      j3.push(j33)
    }
    return j3
  }
};

// Do not write or modify code below this line.
module.exports = _;