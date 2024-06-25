const basicPage = (res, content) => {
  res.write("<html>");
  res.write("<head><title>Node.js practice app</title></head>");
  res.write("<body>");
  res.write(content);
  res.write("</body>");
  res.write("</html>");
  return res.end();
};

module.exports = { basicPage };
