import React, { useState, useEffect } from "react";
import {
  addMemberToChit,
  getAllUsers,
  removeMemberFromChitFund,
} from "../services/chitFundService";
import { getTokenId } from "../utils/auth";

const ChitFundMembers = ({ chitID, members, onAddMember, onRemoveMember }) => {
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberContribution, setNewMemberContribution] = useState("");
  const [memberData, setMembersData] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [addingUserId, setAddingUserId] = useState("");
  const adminId = getTokenId();

  console.log("member :", members);

  useEffect(() => {
    // Fetch users on component mount
    const fetchUsers = async () => {
      const resp = await getAllUsers(adminId);
      if (resp.status === 200) {
        setMembersData(resp.data);
        setFilteredMembers(resp.data);
      }
    };
    fetchUsers();
  }, [adminId]);

  // Filter users based on search term
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setNewMemberName(searchTerm);
    setDropdownVisible(searchTerm.length > 0);
    if (searchTerm) {
      const filtered = memberData.filter((member) =>
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMembers(filtered);
    } else {
      setFilteredMembers(memberData);
    }
  };

  // Select a member from the dropdown
  const handleSelectMember = (member) => {
    setNewMemberName(member.firstName);
    setAddingUserId(member._id);
    setDropdownVisible(false);
  };

  const handleAddMember = async () => {
    if (newMemberName.trim()) {
      onAddMember({
        firstName: newMemberName,
        contribution: newMemberContribution,
      });
      setNewMemberName("");
      setNewMemberContribution("");
      const data = {
        chitFundId: chitID,
        memberId: addingUserId,
      };

      const resp = await addMemberToChit(data);
      console.log("RESULT : ", resp);
    }
  };

  const onRemoveMemberHandler = async (member) => {
    console.log("MEMEBER DELETE : ", member);
    const data = {
      memberId: member._id,
      chitId: chitID,
    };

    const resp = await removeMemberFromChitFund(data);
    if (resp.status === 200) {
      onRemoveMember(member);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Chit Fund Members</h3>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={newMemberName}
            onChange={handleSearch}
            placeholder="Enter member name"
            className="p-2 border border-gray-300 rounded-md flex-grow mb-2"
          />
          {dropdownVisible && (
            <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-md shadow-lg w-full max-h-60 overflow-y-auto">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectMember(member)}
                  >
                    {member.firstName}
                  </li>
                ))
              ) : (
                <li className="p-2">No results found</li>
              )}
            </ul>
          )}
        </div>
        {/* <input
          type="text"
          value={newMemberContribution}
          onChange={(e) => setNewMemberContribution(e.target.value)}
          placeholder="Enter contribution"
          className="p-2 border border-gray-300 rounded-md flex-grow mb-2"
        /> */}
        <button
          onClick={handleAddMember}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Member
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Contribution</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-2">{member.firstName}</td>
              <td className="p-2">{member.contribution}</td>
              <td className="p-2">
                <button
                  onClick={() => onRemoveMemberHandler(member)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChitFundMembers;
