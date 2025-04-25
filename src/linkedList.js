import Node from "./node";

export default class LinkedList {
    constructor () {
        this.list = [];
    }
    append(value) {
        const newNode = new Node(value);
        console.log(newNode)
        if (this.list.length > 0) {
            this.list[this.list.length-1].nextNode = newNode;
        }
        this.list.push(newNode);
    }
    prepend(value) {
        const newNode = new Node(value, this.list[0]);
        this.list.unshift(newNode);
    }
    size() {
        return this.list.length;
    }
    head() {
        return this.list[0];
    }
    tail() {
        return this.list[this.list.length-1];
    }
    at(index) {
        return this.list[index];
    }
    pop() {
        this.list.pop();
    }
    contains(value) {
        return this.list.map(item => item.value).includes(value);
    }
    find(value) {
        const result =  this.list.findIndex(item => item.value === value);
        return result === -1 ? null : result;
    }
    toString() {
        let output = "";
        const headNode = this.list[0];
        function recursiveSearch(node) {
            output += `( ${node.value} ) -> `
            const nextNode = node.nextNode;
            if (nextNode === null) {
                output += "null";
                return;
            }
            recursiveSearch(nextNode);
        }
        recursiveSearch(headNode);
        return output;
    }
    insertAt(value, index) {
        const newNode = new Node(value, this.list[index]);
        this.list.splice(index, 0, newNode);
        this.list[index-1].nextNode = newNode;
    }
    removeAt(index) {
        this.list.splice(index, 1);
        this.list[index-1].nextNode = this.list[index];
    }
}