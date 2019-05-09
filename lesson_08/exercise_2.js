// we will need only one collection for Books
const Book = {
  ISBN: String,
  authors: [String], // list of authors names
  tags: [String], // list of tags
  borrowedBy: String,  // student name
  borrowedAt: Date 
};

// We can create index for borrowed at date so when librarian finds the late books it will use this index
// Also we can add and index for the book name to optimize searching by book name
