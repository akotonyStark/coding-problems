//Linked List
class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    //insert last node
    insertLast(data){
        let node = new Node(data)
        let currentLast
        //if empty
        if(this.head == null){
            this.head = node
        }
        else{
            currentLast = this.head

            while(currentLast.next){
                currentLast = currentLast.next
            }
            currentLast.next = node
        }
        this.size++
       
    }

    //insert at any index
    insertAtIndex(data, index){
        //if index is out of range
        if(index > 0 && index > this.size){
            return
        }

        //if its first index
        if(index == 0){
            this.head = new Node(data, this.head)
            return
        }

        let node = new Node(data)
        let current, previous

        current = this.head
        let count = 0

        while(count < index){
            previous = current
            count++
            current = current.next
        }

        node.next = current
        previous.next = node

        this.size++

    }

    //get at any index
    getAt(index){
        let current = this.head
        let count = 0

        while(current){
           if(count == index){
            console.log(current.data)
           }
           count++
           current = current.next
        }

        return null
    }


    //print list
    printListData(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.insertFirst(100)
linkedList.insertFirst(200)
linkedList.insertLast(400)
linkedList.insertAtIndex(700,2)
linkedList.getAt(2)
linkedList.printListData()