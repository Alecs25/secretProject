
import {useState} from "react"
import  Comment  from "../comment Section/components/comment";
import "../comment Section/CommentStyle.css" 
import useNode from "../comment Section/hooks/useNode";


const comments = {
  id:1,
  items:[]
};

export function Product() {

  const [commentsData, SetCommentsData]=useState(comments);
  const {insertNode,editNode,deleteNode}=useNode()

  const handleInsertNode = (folderId, item)=>{
    const finalStructure = insertNode(commentsData,folderId,value);
    SetCommentsData(finalStructure)
  }
  const handleEdittNode=()=>{
    const finalStructure= editNode(commentsData,folderId,value)
    SetCommentsData(finalStructure)
  }
    const handleDeleteNode = (folderId)=>{
    const finalStructure = deleteNode(commentsData, folderId)
    const temp = {...finalStructure}
    SetCommentsData(temp)
  }

  return (
    
        <section className="App"> 
         
        <Comment 
        handleInsertNode={handleInsertNode} 
        handleEdittNode={handleEdittNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}/>

        </section>
    
  );
}
