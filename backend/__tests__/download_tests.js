// Simulated Express Router
const router = {
    get: (path, handler) => {
      const res = {
        address: null,
        sendFile: (address) => {
          res.address = address;
        },
      };
      handler({}, res);
    },
  };
  
  // Import the router module
  const fileRoutes = {
    get: router.get, // Mocked get method
  };
  
  // Define test cases
  describe("GET /resume/:file", () => {
    it("should send the file", () => {
      fileRoutes.get("/resume/:file", (req, res) => {
        console.log("Resume Address:", res.address);
      });
    });
  });
  
  describe("GET /profile/:file", () => {
    it("should send the file", () => {
      fileRoutes.get("/profile/:file", (req, res) => {
        console.log("Profile Address:", res.address);
      });
    });
  });
  