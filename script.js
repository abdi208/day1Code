class Node {
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data){
      if(data < this.data && this.left){
        this.left.insert(data);
      }else if(data < this.data ){
        this.left = new Node(data);
      }else if(data > this.data && this.right ){
        this.right.insert(data);
      }else if(data > this.data){
        this.right = new Node(data);
      }
    }
  }
  let node = new Node(10);
  node.insert(15);
  node.insert(5);
  node.insert(25);
  node.insert(35);
  console.log(node);