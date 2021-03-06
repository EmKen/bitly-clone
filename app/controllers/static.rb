get "/" do
  erb :"static/index"
end

post "/generate_url" do
  print params
	@url = Url.new(long_url:params[:long_url])
	if @url.save
		# return @url.to_json #to add row to existing table
		erb :"static/table", layout: false #to regenerate whole table
	else
		status 400
		return @url
	end
end


get "/redirect/:id" do
  id = params[:id]
  @url = Url.find(id)
  erb :"static/url_page"
end

get "/:short_url" do
	short_url = params[:short_url]
	@url = Url.find_by(short_url: short_url)
	@url.increment!(:click_count)
	redirect @url.long_url
end