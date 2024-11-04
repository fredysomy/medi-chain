// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MediChain {
    struct Post {
        uint256 postId;
        string name;
        string doctor;
        string desc;
        bytes32[] hashes;
    }

    struct User {
        string userUlid;
        string name;
        uint256[] posts;
    }

    mapping(string => User) public users; // Use string for userUlid as the key
    mapping(uint256 => Post) public posts; 
    
    uint256 public postCounter; 

    // Function to create a user with ULID as a string
    function createUser(string memory userUlid, string memory name) public {
        require(bytes(users[userUlid].userUlid).length == 0, "User already exists");
        
        users[userUlid] = User({
            userUlid: userUlid,
            name: name,
            posts: new uint256[](0)     });
    }

    // Function to create a post and associate it with a user
    function createPost(
        string memory userUlid,
        string memory postName,
        string memory doctor,
        string memory desc,
        bytes32[] memory postHashes
    ) public {
        require(bytes(users[userUlid].userUlid).length != 0, "User does not exist");

        postCounter++; // Increment the postCounter for unique post ID
        
        // Create the new post and store it in the posts mapping
        posts[postCounter] = Post({
            postId: postCounter,
            name: postName,
            doctor: doctor,
            desc: desc,
            hashes: postHashes
        });

        // Link the post to the user by adding the postId to the user's posts array
        users[userUlid].posts.push(postCounter);
    }

    // Function to get user details including the list of their posts
    function getUser(string memory userUlid) public view returns (string memory, string memory, uint256[] memory) {
        require(bytes(users[userUlid].userUlid).length != 0, "User does not exist");

        User storage user = users[userUlid];
        return (user.userUlid, user.name, user.posts); // Returning user's ULID, name, and list of post IDs
    }

    // Function to get post details by post ID
    function getPost(uint256 postId) public view returns (uint256, string memory, string memory, string memory, bytes32[] memory) {
        require(posts[postId].postId != 0, "Post does not exist");

        Post storage post = posts[postId];
        return (post.postId, post.name, post.doctor, post.desc, post.hashes); // Return all details of the post
    }
}
