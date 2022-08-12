import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import "./CustomerInfo.css";

const mockData = [
    {
        id: "XX1",
        name: "Arlene McCoy",
        join_date: "1 February 2021",
        visits: "2",
        purchase_item: "Latte",
        total_spent: "$344"
    },
    {
        id: "XX1",
        name: "Arlene McCoy",
        join_date: "1 February 2021",
        visits: "2",
        purchase_item: "Latte",
        total_spent: "$344"
    },
    {
        id: "XX1",
        name: "Arlene McCoy",
        join_date: "1 February 2021",
        visits: "2",
        purchase_item: "Latte",
        total_spent: "$344"
    },
    {
        id: "XX1",
        name: "Arlene McCoy",
        join_date: "1 February 2021",
        visits: "2",
        purchase_item: "Latte",
        total_spent: "$344"
    },
    {
        id: "XX1",
        name: "Arlene McCoy",
        join_date: "1 February 2021",
        visits: "2",
        purchase_item: "Latte",
        total_spent: "$344"
    }
]

const CustomerInfo = () => {

    const [customerInfo, setCustomerInfo] = useState(mockData)

    return (
        <div className="customer-info">
            <h2>Customer</h2>
            <div className="customer-info_inner">
                
                <div>
                    <SearchBar />
                </div>
                <div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Join Date</th>
                            <th>Total Visit</th>
                            <th>Purchase Items</th>
                            <th>Total Speed</th>
                        </tr>
                        {customerInfo.map((data, index) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.join_date}</td>
                                <td>{data.visits}</td>
                                <td>{data.purchase_item}</td>
                                <td>{data.total_spent}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo