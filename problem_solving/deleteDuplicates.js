/**
 * Below the code for singly linked list
 * @author meganathan
 * 
 */
class Listnode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let deleteDuplicates = function (head) {
    let current = head;
    if (current != null || current.next != null) {
        if (current.val === current.next.value) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;

}