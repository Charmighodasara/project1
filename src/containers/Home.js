import React from 'react';

function Home(data) {
    return (
        <div>
            {
                // <table border={1} cellPadding={10} cellSpacing={0}>
                //     <tr>
                //         <th>id</th>
                //         <th>name</th>
                //         <th>joining_date</th>
                //         <th>salary</th>
                //     </tr>
                //     {
                    data.map((d,i)=>{
                        return(
                    <tr>
                        <td>{d.id}</td>
                    </tr>
                    )
                    })
                //    }
                // </table>
            }

        </div>
    );
}

export default Home;