import { defineStore } from "pinia";
import { formatDateAndTime } from "@/utils/formatDateAndTime";

export const useCommentsStore = defineStore("commentsStore", {
  state: () => ({
    comments: [
      {
        id: 1,
        userName: "Matt Adams",
        email: "matt.adams@gmail.com",
        dateTime: "Jan 2nd, 2012 2:35pm",
        comment:
          "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
        replies: [],
      },
      {
        id: 2,
        userName: "John Toews",
        email: "john.toews@gmail.com",
        dateTime: "Jan 2nd, 2012 2:35pm",
        comment:
          "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
        replies: [],
      },
      {
        id: 3,
        userName: "Andrew Enns",
        email: "andrew.ens@gmail.com",
        dateTime: "Jan 2nd, 2012 2:35pm",
        comment:
          "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
        replies: [],
      },
    ],
  }),
  actions: {
    addNewComment(userName, email, comment) {
      const newComment = {
        id: this.comments.length + 1,
        userName: userName,
        email: email,
        dateTime: formatDateAndTime(new Date()),
        comment: comment,
        replies: [],
      };
      this.comments.push(newComment);
    },
    deleteComment(commentId) {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
    },
    addReplyToComment(commentId, userName, reply) {
      const commentIndex = this.comments.findIndex(
        (comment) => comment.id === commentId
      );

      if (commentIndex !== -1) {
        const newReply = {
          id: this.comments[commentIndex].replies.length + 1,
          userName: userName,
          reply: reply,
        };

        this.comments[commentIndex].replies.push(newReply);
      } else {
        console.error(`Comment with id ${commentId} not found.`);
      }
    },
    deleteReplyToComment(commentId, replyId) {
      const commentIndex = this.comments.findIndex(
        (comment) => comment.id === commentId
      );

      if (commentIndex !== -1) {
        this.comments[commentIndex].replies = this.comments[
          commentIndex
        ].replies.filter((reply) => reply.id !== replyId);
      } else {
        console.error(`Comment with id ${commentId} not found.`);
      }
    },
  },
});
