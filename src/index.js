module.exports = function toReadable (number) {
   let dg = ['','one','two','three','four','five','six','seven','eight','nine'];
  let tn =['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let tw = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let th = ['','thousand','million', 'milliard','billion'];
  let result;
  for (var i = 0; i < 1001; i++) {
    let n=i.toString().split('');
    
    switch (n.length) {
      case 4:
        result=dg[n[0]]+' '+th[n[0]]+' '+dg[n[1]]+(n[1]>0? ' hundred ':' ')+(n[2]==1 ? tn[n[3]] : (n[2]>1 ? tw[n[2]]+' '+dg[n[3]]:dg[n[3]]));
        break;
      case 3:
        result=dg[n[0]]+(n[0]>0? ' hundred ':' ')+(n[1]==1 ? tn[n[2]] : (n[1]>1 ? tw[n[1]]+' '+dg[n[2]]:dg[n[2]]));
        break;
      case 2:
        result=(n[0]==1 ? tn[n[1]] : (n[0]>1 ? tw[n[0]]+' '+dg[n[1]]:dg[n[1]]));
        break;
      case 1:
        result=(n[0]>0? dg[n[0]]:"Zero");
        break;
    }
  }
}
