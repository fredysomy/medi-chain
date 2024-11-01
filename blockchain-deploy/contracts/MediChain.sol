// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Medichain {
    struct Post {
        uint256 postId;
        string name;
        string doctor;
        string desc;
        bytes32[] hashes;
    }

    struct User {
        bytes32 userUlid;
        string name;
        uint256[] posts;
    }

    mapping(bytes32 => User) public users;
    mapping(uint256 => Post) public posts;
    
    uint256 public postCounter;

    function CreateUser(bytes32 userUlid, string name) public {
        require(users[userUlid].userUlid==0 , "User aldready exists");
        users[userUlid].userUlid=userUlid;
        users[userUlid].name=name;
    }

    


}