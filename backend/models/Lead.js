// In-memory storage (ready for MongoDB migration)
let leads = [];
let nextId = 1;

class Lead {
  constructor(data) {
    this.id = nextId++;
    this.name = data.name;
    this.email = data.email;
    this.company = data.company || '';
    this.message = data.message || '';
    this.createdAt = new Date();
    this.status = 'new';
  }

  static validate(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Name is required and must be at least 2 characters');
    }
    
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push('Valid email is required');
    }
    
    return errors;
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static create(data) {
    const errors = this.validate(data);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }
    
    const lead = new Lead(data);
    leads.push(lead);
    return lead;
  }

  static findAll() {
    return leads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  static findById(id) {
    return leads.find(lead => lead.id === parseInt(id));
  }

  static deleteAll() {
    leads = [];
    nextId = 1;
  }
}

module.exports = Lead;
