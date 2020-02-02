import React from "react";

const listCustomer = [
    {
        id: 1,
        name: "Kleber Machado",
        skils: ['React', 'Delphi']
    },
    {
        id: 2,
        name: "João Barbosa",
        skils: ['PHP', 'C#']
    },
    {
        id: 3,
        name: "Adata Lys",
        skils: ['Python', 'CSS']
    },
    {
        id: 4,
        name: "Maicon Douglas",
        skils: ['C++', 'Node']
    }
]

const List = () => {

    const renderCustomers = (customer, index) => {
        return (
          <div key={`customer-${customer.id}`}>  
            <li >{customer.id + ' - ' + customer.name}</li>
            {customer.skils.map(renderSkills)}
          </div>  
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li >{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <p>Application React</p>
            <div>
              <ul>  
                {listCustomer.map(renderCustomers)}
              </ul>  
            </div>
        </div>
    )
}

export default List;