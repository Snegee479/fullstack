package com.example.appController;



import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;
import com.example.dao.AdminDAO;
//import com.example.dao.CustomerDAO;
import com.example.dao.MoviesDAO;
import com.example.dao.ScreenDAO;
import com.example.dao.TheaterDAO;
import com.example.dao.TicketDAO;
import com.example.dao.TimeSlotDAO;
import com.example.pojo.Admin;
//import com.example.pojo.Customer;
import com.example.pojo.Movies;
import com.example.pojo.Screen;
import com.example.pojo.Theater;
import com.example.pojo.Ticket;
import com.example.pojo.TimeSlot;
import com.fasterxml.jackson.databind.ObjectMapper;



@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/")
public class MainController {
	
	@Autowired
	MoviesDAO mdao;
	@Autowired
	TicketDAO ttdao;
	//@Autowired
//	CustomerDAO cdao;
	@Autowired
	ScreenDAO sdao;
	@Autowired
	TheaterDAO tdao;
	@Autowired
	AdminDAO admindao;
	@Autowired
	TimeSlotDAO tsdao;
	Logger logger=Logger.getAnonymousLogger();
	
	//------------------------------------------------------THEATER------------------------------------------------------------------------
	@GetMapping("/getAllTheater")
	public List<Theater> getAllTheater() throws IOException  { 
	logger.info("inside controller's getAllTheater method ");
	List<Theater> tlist=tdao.getAllTheater();
	return tlist;
	}
	@PostMapping("/insertTheater")
	public Theater insertTheater(@RequestBody Theater t) throws IOException { 
	logger.info("inside controller's insertTheater method, Json is "+t );
	logger.info("inserted theater") ;
	return tdao.insert(t);
	}
	@DeleteMapping("/deleteTheater/{theaterId}")
	public String deleteTheater(@PathVariable int theaterId) throws IOException { 
	logger.info("inside controller's deleteTheater method ");
	logger.info( "deleted theater " );
	return tdao.deleteById(theaterId);
	}
	@PutMapping("/updateTheater/{theaterId}")
	public Theater updateTheater(@PathVariable(value = "theaterId") int id,@Valid @RequestBody Theater t) throws IOException { 
	logger.info("inside controller's update Theater method ");
	logger.info("theater is "+t);
	logger.info( "updated theater") ;
	return tdao.update(id,t);
	}
	@GetMapping("findByTheaterId/{theaterId}")
	public Theater findByTheaterId(@PathVariable int theaterId){
	return tdao.findById(theaterId);
	}

	//------------------------------------------------------TIME SLOT------------------------------------------------------------------------
	@GetMapping("/getAllTimeSlot")
		public List<TimeSlot> getAllTimeSlot() throws IOException  { 
		logger.info("inside controller's getAllTimeSlot method ");
		List<TimeSlot> tslist=tsdao.getAllTimeSlot();
		return tslist;}
	@PostMapping("/insertTimeSlot")
		public TimeSlot insertTimeSlot(@RequestBody TimeSlot t) { 
		Screen s=sdao.findById(t.getScreen().getScreenId());
		t.setScreen(s);
		logger.info("inside controller's insertTimeSlot method, the TimeSlot details obtained from jsp are "+t);
		return tsdao.insert(t);
		}
	@DeleteMapping("/deleteTimeSlot/{timeId}")
		public String deleteTimeSlot(@PathVariable int timeId) throws IOException { 
		logger.info("inside controller's deleteTimeSlot method ");
		return 	tsdao.deleteById(Integer.parseInt("timeId"));
		}
	@PutMapping("/updateTimeSlot/{timeId}")
		public TimeSlot updateTimeSlot(@PathVariable(value = "timeId") int id,@Valid @RequestBody TimeSlot t ) throws IOException { 
		Screen s=sdao.findById(t.getScreen().getScreenId());
		t.setScreen(s);
		logger.info("inside controller's update timeslot method ");
		return 	tsdao.updateTimeSlot(id,t);
		}
	@GetMapping("findByTimeId/{timeId}")
		public TimeSlot findByTimeId(@PathVariable int timeId){
			return tsdao.findById(timeId);
		}	
		
	//------------------------------------------------------CUSTOMERS------------------------------------------------------------------------
//	@GetMapping("/getAllCustomers")
//	public List<Customer> getAllCustomers() throws IOException  { 
//	logger.info("inside controller's getAllCustomers method ");
//	List<Customer> clist=cdao.getAllCustomers();
//	logger.info("got the list of customers from cdao");
//	return clist;}

	//-----------------------------------------------------MOVIES-------------------------------------------------------------------------
	@DeleteMapping("/deleteMovie/{movieId}")
	public String deleteMovie(@PathVariable int movieId) throws IOException { 
	logger.info("inside controller's deleteProduct method ");
	return mdao.deleteById(movieId);
	}

	@PostMapping(value="/insertMovies", consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public Movies insertMovie(@RequestParam(value="movie")  String movie,@RequestParam(value="myFile",required=false) MultipartFile file) throws IOException { 
//         = new Movies( ,file.getContentType(),file.getBytes() );
		logger.info("inside controller's insertMovie method, the value of movie name obtained from jsp is "+ movie);
		logger.info("movie "+ movie);
		ObjectMapper objectMapper = new ObjectMapper();

		Movies MovieObj = objectMapper.readValue(movie, Movies.class);
		logger.info(MovieObj.getMovieName());	
		logger.info("file "+ file+" "+file.getName()+" "+file.getOriginalFilename());
		MovieObj.setPic(file.getBytes());
	return mdao.insert(MovieObj);
	}
	
	@PutMapping("/updateMovie/{movieId}")
	public Movies updateMovie(@PathVariable(value = "movieId") int id,
			@Valid @RequestBody Movies movie) throws IOException { 
	logger.info("inside controller's updateProduct method ");
	return mdao.update(id,movie);
	}

	@GetMapping("/getAllMovies")
	public List<Movies> getAllMoviesList() throws IOException { 
		logger.info("inside controller's getAllMovies method ");
		List<Movies> mlist=	mdao.getAll();
		return mlist;
	}	
	@GetMapping(value = "/findByMovieId/{movieId}")
	public Movies findByMovieId(@PathVariable int movieId){
		System.out.println("---movieId---"+movieId);
		Movies m = mdao.findByMovieId(movieId);
		System.out.println("---movies---"+m);
		
		return m;
	}
	
	

	//-----------------------------------------------------------SCREEN----------------------------------------------------------------
	@DeleteMapping("/deleteScreen/{screenId}")
	public String deleteScreen(@PathVariable int screenId) throws IOException { 
	logger.info("inside controller's deleteScreen method ");
	return mdao.deleteById(screenId);
	}

	@PostMapping("/insertScreen")
	public Screen insertScreen(@RequestBody Screen s) throws IOException { 
	logger.info("inside controller's insertScreen method, the value of screen name obtained is "+ s);
	Movies m=mdao.findByMovieId(s.getMovie().getMovieId());
	Theater t=tdao.findById(s.getTheater().getTheaterId());
	s.setMovie(m);s.setTheater(t);
	return sdao.insert(s);
	}
	
	@PutMapping("/updateScreen/{screenId}")
	public Screen updateScreen(@PathVariable(value = "screenId") int id,
			@Valid @RequestBody Screen s) throws IOException { 
		Movies m=mdao.findByMovieId(s.getMovie().getMovieId());
		Theater t=tdao.findById(s.getTheater().getTheaterId());
		s.setMovie(m);s.setTheater(t);
		logger.info("inside controller's updateScreen method ");
		return sdao.update(s);
	}

	@GetMapping("/getAllScreen")
	public List<Screen> getAllScreen() throws IOException { 
		logger.info("inside controller's getAllScreen method ");
		List<Screen> slist=	sdao.getAll();
		return slist;
	}	
	@GetMapping("findByScreenId/{screenId}")
	public Screen findByScreenId(@PathVariable int screenId){
		return sdao.findById(screenId);
	}
	
	//----------------------------------------------------------TICKET----------------------------------------------------------------
	
	@DeleteMapping("/deleteTicket/{ticketId}")
	public String deleteTicket(@PathVariable int ticketId) throws IOException { 
	logger.info("inside controller's deleteTicket method ");
	return ttdao.deleteById(ticketId);
	}

	@PostMapping("/insertTicket")
	public Ticket insertTicket(@RequestBody Ticket t) throws IOException { 
	logger.info("inside controller's insertTicket method, the value of ticket name obtained is "+ t);
	return ttdao.insert(t);
	}
	
	@PutMapping("/updateTicket")
	public Ticket updateTicket(@RequestBody Ticket t) throws IOException { 
		logger.info("inside controller's updateTicket method ");
		return ttdao.updateTicket(t);
	}

	@GetMapping("/getAllTicket")
	public List<Ticket> getAllTicket() throws IOException { 
		logger.info("inside controller's getAllTicket method ");
		List<Ticket> ttlist=	ttdao.getAllTickets();
		return ttlist;
	}	
	@GetMapping("findByTicketId/{ticketId}")
	public Ticket findByTicketId(@PathVariable int ticketId){
		return ttdao.findById(ticketId);
	}
	
	//---------------------------------------------------------LOGIN LOGOUT------------------------------------------------------------
	@RequestMapping("/logout")
	private void logout(HttpServletRequest request, HttpServletResponse response) throws Exception {
		RequestDispatcher dispatcher = request.getRequestDispatcher("login.jsp");
			dispatcher.forward(request, response);
}

	
	@RequestMapping("/login")
	public String login(HttpServletRequest request,HttpServletResponse res,@RequestParam("password") String password) throws IOException {
		String Email=request.getParameter("email");
		logger.info("inside the request mapping of login");
		logger.info("object from user"+admindao.findByEmail(Email));
		Admin admin=admindao.findByPassword(password);
		HttpSession session = request.getSession();
		session.setAttribute("admin", admin);
		logger.info("admin from password is "+admindao.findByPassword(password));
		logger.info("admin from email is "+admindao.findByEmail(Email));
		if(admindao.findByEmail(Email).equals(admindao.findByPassword(password))) {
			logger.info("validation of the admin is successfull");
			logger.info(((Admin)session.getAttribute("admin")).getName()+"this is what is stored in validated admin's name detail");
			if(admin.getRole()=="admin") {res.sendRedirect("http://localhost:8080/getAllMovies");}
			// if login password and username matches response should be like {
//			UawerName:snega
//			Email:example@gmail.com
//			role:admin or customer
//			}
			//else {}

			return"Login is successfull";
		}
		else {
			logger.info("failed");
			res.sendRedirect("Error.jsp");
		return "login failed ! please check your credentials ";
		}
		
	}


}
