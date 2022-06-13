// import React from 'react';

// function Home({ data }) {
//     return (
//         <div>
//             {
//                 data.map((d, i) => {
//                     return (
//                         <div key={i}>
//                             <h3>{d.id}</h3>
//                             <h4>{d.name}</h4>
//                             <h4>{d.joining_date}</h4>
//                             <h4>{d.salary}</h4>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// }

// export default Home;
import React from 'react';

function Home({ data }) {
    return (
        <div>
            {
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <tr>
                        <th><p>id</p></th>
                        <th><p>name</p></th>
                        <th><p>joining_date</p></th>
                        <th><p>salary</p></th>
                    </tr>
                    <tr>
                        {
                            data.map((d, i) => {
                                const {id ,name , joining_date , salary } = d
                                return (
                                    <div key={i}>
                                        <td><p>{id}</p></td>
                                        <td><p>{name}</p></td>
                                        <td><p>{joining_date}</p></td>
                                        <td><p>{salary}</p></td>
                                    </div>
                                )
                            })
                        }
                    </tr>
                </table>
            }
        </div>
    );
}

export default Home;
