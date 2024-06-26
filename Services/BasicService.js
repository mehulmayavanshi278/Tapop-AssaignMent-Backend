class BasicService {
  constructor(model) {
    this.model = model;
  }

  create = (body) => {
    return this.model.create(body);
  };
  find = (body) => {
    return this.model.find(body);
  };
  findOne = (filter) => {
    return this.model.findOne(filter);
  };
  findById = (id) => {
    return this.model.findById(id);
  };
  findByIdAndUpdate = (id, Object, projection) => {
    return this.model.findByIdAndUpdate(id, Object, projection);
  };
  findByIdAndDelete = (id) => {
    return this.model.findByIdAndDelete(id);
  };
}

module.exports.BasicService = BasicService;
