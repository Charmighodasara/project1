
import React from 'react';

function Home({ data }) {
    return (
        <div>
            {
                <table border={1} cellPadding={0} cellSpacing={0}>
                    <tr>
                        <th><p>id</p></th>
                        <th><p>name</p></th>
                        <th><p>joining_date</p></th>
                        <th><p>salary</p></th>
                    </tr>
                    <tr>
                        {
                            data.map((d, i) => {
                                const { id, name, joining_date, salary } = d
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
