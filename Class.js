//종이컵 숟가락 계량 변환기


function conv(unit,n){
    if(unit=='g' || unit=='ml'){
                cup = n/this.cup
                spoon = n/this.spoon
                arr = [cup,spoon]
                return arr;
            }
    else if (unit=='kg' || unit=='L'){
        cup = n*1000/this.cup
        spoon = n/this.spoon
        arr = [cup,spoon]
        return arr
    }
}




class Main{
    constructor(){
        this.ingrArr = ['물','설탕','뉴슈가','고추가루','가는소금','굵은소금','다진마늘','고추장','된장','올리브오일','식용유','간장','식초','액젓','계란물','우유','중력분','박력분','강력분','밀가루(미표기상품)','베이킹파우더','베이킹소다'];
        this.ingrDict = {};
        //powder
        this.ingrDict['설탕']= 'powder';
        this.ingrDict['뉴슈가'] = 'powder';
        this.ingrDict['고추가루'] = 'powder';
        this.ingrDict['가는소금'] = 'powder';
        this.ingrDict['굵은소금'] = 'powder';
        this.ingrDict['밀가루'] = 'powder';
        this.ingrDict['베이킹파우더'] = 'powder';
        this.ingrDict['베이킹소다'] = 'powder';
        //liquid
        this.ingrDict['물'] = 'liquid';
        this.ingrDict['올리브오일'] = 'liquid';
        this.ingrDict['식용유'] = 'liquid';
        this.ingrDict['식초'] = 'liquid';
        this.ingrDict['간장'] = 'liquid';
        this.ingrDict['액젓'] = 'liquid';
        this.ingrDict['계란물'] = 'liquid';
        this.ingrDict['우유'] = 'liquid';
        //jang
        this.ingrDict['고추장'] = 'jang';
        this.ingrDict['된장'] = 'jang';


        this.spoon = 10
        this.cup = 190
    }

    conv(ingrName,unit,n){
        type = this.ingrDict[ingrName];
        

        switch(type){
            case 'powder':
                cup = 160

            case 'liquid':
            
            case 'jang':

        }
    }




    conver(ingrName,unit,n){
        type = this.ingrDict[ingrName]
        switch(type){
        case 'powder':
            if(unit=='g' || unit=='ml'){
                cup = n/this.cup
                spoon = n/this.spoon
                arr = [cup,spoon]
                return arr;
            }
            else if (unit=='kg' || unit=='L'){
                cup = n*1000/this.cup
                spoon = n/this.spoon
                arr = [cup,spoon]
                return arr
            }
        case 'liquid':
            if(unit=='g' || unit=='ml'){
                cup = n/this.cup
                spoon = n/this.spoon
                arr = [cup,spoon]
                return arr;
            }
            else if (unit=='kg' || unit=='L'){
                cup = n*1000/this.cup
                spoon = n/this.spoon
                arr = [cup,spoon]
                return arr
            }
        break;

        case 'jang':
        
        break;


        }
    }

}