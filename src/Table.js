import React, {useState} from 'react';
import Button from './Button';

function Table({data}) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstitem = indexOfLastitem - itemsPerPage; 
    const paginatedData = data.slice(indexOfFirstitem, indexOfLastitem);
 
    const handleNext = () => {
        if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    const handlePrev = () => {
        if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
        }
    };
  
  return (
    <div className='tableParent'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {paginatedData.map((emp)=>(
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='pagination'>
            <Button classname={"navBtn btn-primary"} disabled={currentPage === 1} text={"Previous"} click={()=>handlePrev()} />                             
            <Button classname={"numBtn btn-primary"} text={currentPage} />          
            <Button classname={"navBtn btn-primary"} disabled={currentPage === totalPages} text={"Next"} click={()=>handleNext()} />
        </div>
    </div>
  )
}

export default Table;