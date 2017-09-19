import supertest from 'supertest';
import chai from 'chai';
import userData from '../model/schema';
import sinon from 'sinon';
import app from '../bin/initial';
let url = 'http://localhost:3011';
let sinonStubFetch = sinon.stub(userData, 'find');
 let sinonStubInsert = sinon.stub(userData.prototype, 'save');
let sinonStubUpdate  =  sinon.stub(userData, 'update');
let sinonStubDeletee = sinon.stub(userData, 'remove');
/*chai.expect();*/
describe('Test fetch data',() =>{
	
	before(() => {
		sinonStubFetch.yields(null, [{name: 'Chandra', email: 'stshivam@gmail.com', password :'shivam',confpassword:'shivam' }]);
	});
	it('validation',(done) => {
		
	
		supertest(url)
			.get('/')
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
				if (err) return done(err);
				chai.expect(res.body[0].name).to.equal("Chandra");
				chai.expect(res.body[0].email).to.equal('stshivam');
                chai.expect(res.body[0].password).to.equal('Lucknow');
                chai.expect(res.body[0].confpassword).to.equal('Lucknow');
				done();
		});
	});
});

 describe('Insert Testing',() =>{
	
  let user = {name: 'shivam', email: 'stshivam', password:'Lucknow', confpassword:'Lucknow'};
  before((done) => 
  {
  	sinonStubInsert.yields(null, [user]);
	done();	
  });

	it('Insert data',(done) => {
		supertest(url)
			.post('/users')
			.expect(200)
			.expect('Content-Type', /json/)
			.send(user)
			.end((err, res) => {				
				if (err) return done(err);
		     	chai.expect(res.body[0].name).to.equal("Chandra");
				chai.expect(res.body[0].email).to.equal('stshivam');
                chai.expect(res.body[0].password).to.equal('Lucknow');
                chai.expect(res.body[0].confpassword).to.equal('Lucknow');
				done();
			});
          
			 
		});
	});



describe('Update Testing',(done) =>{
	
        beforeEach(() => {
		
		sinonStubUpdate.yields(null, { title : 'Hero',
			$set : {vote_count : 33}, ok: 1, nModified: 0, n: 0});
		
	    });
     
	it('Update data',(done) => {
		supertest(url)
			.put('/update/:Chandra')
			.expect("Content-Type", /json/)
			.send({$set : {Address : 'Delhi'}})
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				chai.expect(res.body.ok).to.equal(1)
				chai.expect(res.body.nModified).to.equal(0);
				chai.expect(res.body.n).to.equal(0);

				done();
			});		 
		});
	});

describe('Delete Testing',(done) =>{
	 
        beforeEach(() => {
		sinonStubDeletee.yields(null, {email : 'stshivam', ok:1, nRemoved: 1, n:1});
		
	    });

	it('Delete data',(done) => {
		supertest(url)
			.delete('/deletee')
			.expect("Content-Type", /json/)
			.send({ email : 'stshivam'})
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				chai.expect(res.body.ok).to.equal(1);	
				chai.expect(res.body.nRemoved).to.equal(1);
				chai.expect(res.body.n).to.equal(1);
                
				done();
			
				
			});
          
			 
		});
	});