export default function getAvAge(users) {
  return users.reduce((sum, curr) => sum + curr.age, 0) / users.length;
}
