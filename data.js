class Ingrs{
    constructor(){
        this.ingrArr = ['물','설탕','뉴슈가','고추가루','가는소금','굵은소금','다진마늘','고추장','된장','올리브오일','식용유','간장','멸치액젓','까나리액젓','계란물','우유','중력분','박력분','강력분','밀가루(미표기상품)','베이킹파우더','베이킹소다']
        this.ingrDict = {}
        this.ingrDict['물'] = 1
        
    }
}


class Unit_orig{
    constructor(){
        this.UnitArr = ['ml','L','cc','oz']
    }

}

class Unit_conv{
    constructor(){

        //컵,밥숟가락


        this.cup = 190//ml //가루류 1컵 약160g, 장류 약 200g
        this.ts = 10//ml, (약 gram - 액체류,오일류,가루류(9g),장류)
    }
}