class List {
    constructor() {
        this._list = []
    }

    addToCart(item) {
        if (!this.has(item)) {
            this._list.push(item)
        }
    }

    removeFromList(item) {
        this._list.splice(this._list.indexOf(item), 1)
    }

    has(item) {
        for (let element of this._list) {
            if (element === item) {
                return true;
            }
        }
        return false;
    }

    get getNumberOfItems() {
        // TODO: in progress
        return this._list.size
    }

    getItem(item) {
        return this._list[`${item}`]
    }

    getList() {
        return this._list
    }
}

export { List }
