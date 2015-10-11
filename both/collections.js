
Contacts = new Mongo.Collection('userN');
Contacts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "标题",
    max: 200
  },
  author: {
    type: String,
    label: "作者"
  },
  copies: {
    type: Number,
    label: "数字范围",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "书藉签出日期",
    optional: true
  },
  summary: {
    type: String,
    label: "简介总结",
    optional: true,
    max: 1000
  }
}));
