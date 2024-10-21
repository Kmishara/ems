const employees = [
  {
    "id": "1",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task": "Prepare sales report",
        "description": "Compile weekly sales data and present in a report.",
        "taskDate": "2024-10-20",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task": "Client meeting",
        "description": "Meeting with potential client to discuss project requirements.",
        "taskDate": "2024-10-22",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task": "Data entry",
        "description": "Input data from surveys into the system.",
        "taskDate": "2024-10-18",
        "category": "Data Management"
      }
    ]
  },
  {
    "id": "2",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task": "Inventory check",
        "description": "Verify and update stock levels for all products.",
        "taskDate": "2024-10-21",
        "category": "Inventory"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task": "Update website",
        "description": "Add new product listings to the e-commerce website.",
        "taskDate": "2024-10-19",
        "category": "IT"
      }
    ]
  },
  {
    "id": "3",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task": "Budget analysis",
        "description": "Review department budgets and propose cost-saving measures.",
        "taskDate": "2024-10-23",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task": "Event planning",
        "description": "Organize the company’s annual networking event.",
        "taskDate": "2024-10-16",
        "category": "Event Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task": "Team training",
        "description": "Conduct training on new project management tools.",
        "taskDate": "2024-10-20",
        "category": "Human Resources"
      }
    ]
  },
  {
    "id": "4",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task": "Software installation",
        "description": "Install and configure software for the IT team.",
        "taskDate": "2024-10-21",
        "category": "IT Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task": "Customer feedback",
        "description": "Follow up with customers to gather feedback on services.",
        "taskDate": "2024-10-15",
        "category": "Customer Service"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task": "Marketing strategy",
        "description": "Develop a marketing plan for the new product launch.",
        "taskDate": "2024-10-18",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": "5",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task": "Social media campaign",
        "description": "Create and schedule posts for the upcoming campaign.",
        "taskDate": "2024-10-24",
        "category": "Social Media"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task": "Product testing",
        "description": "Test new product features and report any issues.",
        "taskDate": "2024-10-20",
        "category": "Quality Assurance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task": "Prepare presentation",
        "description": "Create a presentation for the upcoming board meeting.",
        "taskDate": "2024-10-18",
        "category": "Administration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task": "Server maintenance",
        "description": "Perform scheduled maintenance on the company’s servers.",
        "taskDate": "2024-10-14",
        "category": "IT Support"
      }
    ]
  }
];
const admin = [
  {
    "id": "admin1",
    "email": "admin@example.com",
    "password": "123"
  }
];
export const setLocalStorage = () =>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return{employees,admin}
}