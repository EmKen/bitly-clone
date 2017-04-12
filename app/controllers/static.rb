get "/" do
  erb :"static/index"
end

post "/generate_url" do
  print params
	url = Url.new(long_url:params[:long_url])
	if url.save
	redirect "redirect/#{url.id}"
	else
		render "static/index"
	end
end

# i.e. /q6bda
get "/redirect/:id" do
  id = params[:id]
  @url = Url.find(id)
  erb :"static/url_page"
end