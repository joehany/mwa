// we will need only one collection for Books
const Book = {
  ISBN: String,
  authors: [String], // list of authors names
  tags: [String], // list of tags
  borrowedBy: String,  // student name
  borrowedAt: Date 
};
